import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, Modal, TouchableOpacity, FlatList } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';


const api = axios.create({
  baseURL: "https://solutech-fiap-default-rtdb.firebaseio.com/"
});

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/teste.json');
        const data = response.data;
        const newsList = [];
        for (const key in data) {
          const news = {
            id: key,
            ...data[key]
          };
          newsList.push(news);
        }
        setNoticias(newsList);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.noticia}>
      <Image source={{ uri: item.urlImage }} style={styles.noticiaImagem} />
      <Text style={styles.textNoticia}>{item.description}</Text>
    </View>
  );

  const formatDate = (date) => {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
  
    return `${dayOfWeek}, ${day} de ${month}`;
  }

  return (
    <View style={styles.container}>
      <Menu navigation={navigation}/>

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>NOTÍCIAS DO DIA</Text>
          <Text style={styles.subtitulo}>{formatDate(new Date())}</Text>
        </View>
        <View style={styles.noticias}>
          <FlatList
            data={noticias}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2} // Alinha as notícias em duas colunas
            columnWrapperStyle={styles.noticiaContainer}
          />
        </View>

        <Footer />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTittle}>DESCUBRA O PODER DOS INVESTIMENTOS: SEU PRIMEIRO PASSO RUMO À PROSPERIDADE FINANCEIRA!</Text>
            <Text style={styles.modalText}>Temos a solução perfeita para quem está começando a investir mas não sabe por onde começar. Siga para nossa tela de investidor inicial.</Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => { navigation.navigate('InvestmentForm'); setModalVisible(!modalVisible) }}>
              <Text style={styles.textStyle}>Começar minha jornada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Não possuo interesse</Text>
            </TouchableOpacity>
            <Text style={styles.modalRodape}>Seu dinheiro pode trabalhar por você! Com os investimentos certos, alcance seus objetivos financeiros e sonhos. Novato ou não, estamos aqui para ajudar. Faça uma simulação e comece a investir hoje!</Text>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8E9E4',
  },
  menu: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  lista: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '85%',
    marginTop: -20,
  },
  topicos: {
    color: '#797777',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  conteudo: {
    alignItems: 'center',
  },
  conteudoTitle: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#797777',
  },
  subtitulo: {
    fontSize: 12,
    color: '#797777',
    marginBottom: '5%',
  },
  noticias: {
    marginTop: 20,
  },
  noticiaContainer: {
    justifyContent: 'space-between',
  },
  noticia: {
    marginBottom: 10,
    width: '48%',
    borderWidth: 1,
    borderColor: '#B9C7C5',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#20515E",
    paddingHorizontal: 35,
    paddingVertical: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    textAlign: "center",
    color: '#797777',
    fontSize: 10,
    marginBottom: '10%',
  },
  modalRodape: {
    textAlign: "center",
    color: '#797777',
    fontSize: 10,
  },
  modalTittle: {
    color: '#E4A96A',
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center'
  },
  buttonClose: {
    backgroundColor: "#E8E9E4",
    borderRadius: 5,
    width: 180,
    padding: 10,
    marginBottom: '8%',
  },
  textStyle: {
    color: "#797777",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
  },
  noticiaImagem: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  textNoticia: {
    fontSize: 12,
    padding: 10,
  },
});
