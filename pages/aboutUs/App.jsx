import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, ScrollView  } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

const investimento = require('../../assets/investimento.jpeg');

export default function AboutUs({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Menu navigation={navigation}/>

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>SOBRE NÓS</Text>
          <Text style={styles.subtitulo}>Conheça mais sobre nossa história.</Text>
        </View>

        <View style={styles.conteudoDescription}>
          <Text style={styles.tituloDescription}>Bem-vindo à Solutech!</Text>
          <Text style={styles.subtituloDescription}>Na Solutech, estamos comprometidos em transformar a experiência de investimentos dos nossos clientes através de soluções inovadoras e personalizadas. Nossa missão é oferecer suporte abrangente e educativo para investidores de todos os níveis, desde iniciantes até os mais experientes, ajudando-os a tomar decisões financeiras informadas e alcançar seus objetivos de longo prazo.</Text>
          <Image source={investimento} style={styles.centerImage} />
          <Text style={styles.tituloDescription}>Nossa Missão!</Text>
          <Text style={styles.subtituloDescription}>Nosso objetivo primordial é fornecer uma plataforma de investimentos que vá além do simples acompanhamento de portfólio. Queremos ser um verdadeiro catalisador para o sucesso financeiro dos nossos clientes, oferecendo uma combinação única de orientação especializada e ferramentas avançadas. Na Solutech, acreditamos que todos devem ter acesso a insights valiosos e suporte contínuo para tomar decisões financeiras estratégicas e construir um futuro próspero e seguro.</Text>
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
  conteudoDescription: {
    alignItems: 'center',
    marginBottom: '5%',
    width: 350,
    paddingHorizontal: '6%', 
    paddingVertical: '6%',
    borderColor: '#20515E',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  tituloDescription: {
    color: '#E4A96A',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: '5%',
  },
  subtituloDescription: {
    color: '#797777',
    fontSize: 12,
  },
  centerImage: {
    marginVertical: '8%',
  }
});