import React, { useState } from 'react';
import axios from 'axios';
import { StatusBar, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

const api = axios.create({
  baseURL: "https://solutech-fiap-default-rtdb.firebaseio.com/"
});

export default function SingIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
    try {
      const response = await api.get('/usuarios.json');
      const data = response.data;

      let userFound = false;

      for (const key in data) {
        if (data[key].email === email && data[key].senha === senha) {
          userFound = true;
          alert("Login bem-sucedido!", `Bem-vindo, ${data[key].nome}!`);
          navigation.navigate('Home');
          break;
        } else if (data[key].email != email && data[key].senha === senha) {
          alert("Erro de login, o email está incorreto. Tente novamente.");
        } else if (data[key].email === email && data[key].senha != senha) {
          alert("Erro de login, a senha está incorreta. Tente novamente.");
        }
      }


    } catch (error) {
      alert("Erro", `Erro ao fazer login: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Menu navigation={navigation}/>

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>Entrar</Text>
          <Text style={styles.subtitulo}>Ainda não tem conta em nossa plataforma?</Text>
          <Text style={styles.subtitulo}>Não perca tempo e
            <Text style={styles.span} onPress={() => { navigation.navigate('SingUp'); }}> cadastra-se </Text>
            para ficar por dentro do mundo dos investimentos.
          </Text>
        </View>

        <View style={styles.conteudoInput}>
          <View style={styles.conteudoTitle}>
            <Text style={styles.titleInput}>BEM-VINDO À SOLUTECH FINANCE!</Text>
            <Text style={styles.desInput}>Aqui, você encontrará tudo que precisa para começar sua jornada rumo ao sucesso financeiro. Explore nossos recursos e esteja pronto para investir no seu futuro. Estamos aqui para ajudá-lo a cada passo do caminho. Boa sorte e bons investimentos!</Text>
          </View>
          <View>
            <View>
              <Text style={styles.desInput}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View>
              <Text style={styles.desInput}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}
              />
            </View>
            <TouchableOpacity style={styles.botao} onPress={login}>
              <Text style={styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer />
      </View>

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
    marginBottom: '6%',
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
  rodape: {
    flexDirection: "column",
    width: '100%',
  },
  conteudoRodape: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    width: '100%',
    paddingHorizontal: '7%',
  },
  textRodape: {
    width: 180,
    fontSize: 12,
  },
  textRedes: {
    fontSize: 12,
    marginBottom: '10%',
  },
  imageRedes: {
    flexDirection: "row",
  },
  linhaRodape: {
    height: 2,
    marginTop: '10%',
    width: '100%',
    marginBottom: '5%',
  },
  imgRodape: {
    width: 17,
    height: 17,
  },
});
