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
  
});
