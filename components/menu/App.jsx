import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';

const logo = require('../../assets/logo.png');


export default function Menu({ navigation }) {
    return(
        <View style={styles.menu}>
            <View>
            <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.lista}>
            <Text style={styles.topicos} onPress={() => { navigation.navigate('Home'); }}>Notícias</Text>
            <Text style={styles.topicos} onPress={() => { navigation.navigate('Moeda'); }}>Moedas</Text>
            <Text style={styles.topicos}>Cálculos</Text>
            <Text style={styles.topicos}>Sobre nós</Text>
            <Text style={styles.topicos} onPress={() => { navigation.navigate('SingIn'); }}>Entrar</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
});