import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StatusBar, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';
import { UserContext } from '../../components/dataUser/App'; 

const api = axios.create({
  baseURL: "https://solutech-fiap-default-rtdb.firebaseio.com/"
});

export default function EditUser({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      <Menu navigation={navigation}/>

      <View style={styles.conteudo}>
        <View style={styles.conteudoInput}>
          <View style={styles.conteudoTitle}>
            <Text style={styles.titleInput}>DADOS PESSOAIS</Text>
            <Text style={styles.desInput}>Aqui, você ver todos seus dados e caso haja algum que precise de atualização, basta editar.</Text>
          </View>
          <View>
            <View>
              <Text style={styles.desInput}>Nome:</Text>
              <TextInput
                style={styles.input}
                value={user.nome}
                editable={false}
              />
            </View>
            <View>
              <Text style={styles.desInput}>CPF:</Text>
              <TextInput
                style={styles.input}
                value={user.cpf}
                editable={false}
              />
            </View>
            <View>
              <Text style={styles.desInput}>Email:</Text>
              <TextInput
                style={styles.input}
                value={user.email}
                editable={false}
              />
            </View>
            <View>
              <Text style={styles.desInput}>Senha:</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={user.senha}
                editable={false}
              />
            </View>
          </View>
        </View>

        <Footer />
      </View>

      <StatusBar style="auto" />
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
