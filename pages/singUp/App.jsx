import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

export default function SingUp({ navigation }) {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
  });
  const [confirmacao, setConfirmacao] = useState("");

  function cadastrar(usuario) {
    api.post('/usuarios.json', usuario).then(alert("Cadastrado com sucesso! Seja bem-vindo " + usuario.nome)).catch((err) => {alert("Erro! " + err)});
    navigation.navigate('Home');
    console.log(usuario);
  }

  const handleChange = (name, value) => {
    setUsuario({
      ...usuario,
      [name]: value
    });
  };

  const handleConfirmacao = (value) => {
    setConfirmacao(value);
  };


  return (
    <ScrollView style={styles.container}>
      <Menu navigation={navigation}/>

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>CADASTRAR</Text>
          <Text style={styles.subtitulo}>Você já tem conta em nossa plataforma?</Text>
          <Text style={styles.subtitulo}>Não perca tempo e
            <Text style={styles.span} onPress={() => { navigation.navigate('SingIn'); }}> entre </Text>
            para ficar por dentro do mundo dos investimentos. </Text>
        </View>

        <View style={styles.conteudoInput}>
          <View style={styles.conteudoTitle}>
            <Text style={styles.titleInput}>BEM-VINDO À SOLUTECH FINANCE!</Text>
            <Text style={styles.desInput}>Aqui, você encontrará tudo que precisa para começar sua jornada rumo ao sucesso financeiro. Explore nossos recursos e esteja pronto para investir no seu futuro. Estamos aqui para ajudá-lo a cada passo do caminho. Boa sorte e bons investimentos!</Text>
          </View>
          <View>
            <View>
              <Text style={styles.desInput}>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome completo"
                value={usuario.nome}
                onChangeText={(text) => handleChange('nome', text)}
              />
            </View>
            <View>
              <Text style={styles.desInput}>CPF:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu CPF"
                value={usuario.cpf}
                onChangeText={(text) => handleChange('cpf', text)}
              />
            </View>
            <View>
              <Text style={styles.desInput}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={usuario.email}
                onChangeText={(text) => handleChange('email', text)}
              />
            </View>
            <View>
              <Text style={styles.desInput}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu senha"
                secureTextEntry={true}
                value={usuario.senha}
                onChangeText={(text) => handleChange('senha', text)}
              />
            </View>
            <View>
              <Text style={styles.desInput}>Confirme sua senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                secureTextEntry={true}
                value={confirmacao}
                onChangeText={(text) => handleConfirmacao(text)}
              />
            </View>
            <TouchableOpacity style={styles.botao} onPress={handleSignUp}>
              <Text style={styles.textoBotao}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </View>


      <StatusBar style="auto" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Digite o código de verificação enviado para o seu e-mail:</Text>
            <TextInput
              style={styles.input}
              placeholder="Código de verificação"
              value={codigo}
              onChangeText={setCodigo}
            />
            <TouchableOpacity style={styles.botao} onPress={verificarCodigo}>
              <Text style={styles.textoBotao}>Verificar Código</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E9E4', 
  },
  conteudo: {
    alignItems: 'center',
  },
  conteudoTitle: {
    alignItems: 'center',
    marginBottom: '5%',
    width: 350,
    
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#797777',
  },
  subtitulo: {
    fontSize: 12,
    color: '#797777',
    textAlign: 'center',
  },
  span: {
    color: '#E4A96A',
  },
  conteudoInput: {
    paddingHorizontal: '3%',
    paddingVertical: '12%',
    alignItems: 'center',
    backgroundColor: '#20515E',
  },
  desInput: {
    fontSize: 10,
    color: '#E4A96A',
    width: '80%',
    marginBottom: '2%',
  },
  titleInput: {
    fontSize: 16,
    color: '#E4A96A',
    fontWeight: 'bold',
    marginBottom: '2%',
    
  },
  input: {
    height: 40,
    width: 280,
    borderColor: '#20515E',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
  },
  botao: {
    marginTop: '5%',
    backgroundColor: '#f2f2f2', 
    paddingHorizontal: '12%', 
    paddingVertical: '3%',
    borderRadius: 10,
  },
  textoBotao: {
    color: '#666', 
    fontSize: 12, 
    textAlign: 'center', 
  }, 
});
