import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';
const logo = require('../../assets/logo.png');
const imgNoticia = require('../../assets/exp-noticia.png');
const instagram = require('../../assets/instagram.png');
const facebook = require('../../assets/facebook.png');
const twitter = require('../../assets/twitterX.png');
const rodape = require('../../assets/linha-rodape.png');

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.menu}>
        <View>
          <Image source={logo} style={styles.logo}/>
        </View>
        <View style={styles.lista}>
          <Text style={styles.topicos}>Notícias</Text>
          <Text style={styles.topicos}>Moedas</Text>
          <Text style={styles.topicos}>Cálculos</Text>
          <Text style={styles.topicos}>Sobre nós</Text>
          <Text style={styles.topicos} onPress={() => {navigation.navigate('SingIn');}}>Entrar</Text>
        </View>
      </View>

      <View style={styles.conteudo}>
        <View  style={styles.conteudoTitle}>
          <Text style={styles.titulo}>NOTÍCIAS DO DIA</Text>
          <Text style={styles.subtitulo}>Segunda-feira, 18 de Maio</Text>
        </View>
        <View style={styles.noticias}>
          <View style={styles.noticiaContainer}>
            <View style={styles.noticia}>
              <Image source={imgNoticia} style={styles.noticiaImagem}/>
              <Text style={styles.textNoticia}>Goldman Sachs should split CEO and chairman roles, proxy adviser ISS says</Text>
            </View>
            <View style={styles.noticia}>
              <Image source={imgNoticia} style={styles.noticiaImagem}/>
              <Text style={styles.textNoticia}>Goldman Sachs should split CEO and chairman roles, proxy adviser ISS says</Text>
            </View>
            <View style={styles.noticia}>
              <Image source={imgNoticia} style={styles.noticiaImagem}/>
              <Text style={styles.textNoticia}>Goldman Sachs should split CEO and chairman roles, proxy adviser ISS says</Text>
            </View>
            <View style={styles.noticia}>
              <Image source={imgNoticia} style={styles.noticiaImagem}/>
              <Text style={styles.textNoticia}>Goldman Sachs should split CEO and chairman roles, proxy adviser ISS says</Text>
            </View>
            <View style={styles.noticia}>
              <Image source={imgNoticia} style={styles.noticiaImagem}/>
              <Text style={styles.textNoticia}>Goldman Sachs should split CEO and chairman roles, proxy adviser ISS says</Text>
            </View>
            <View style={styles.noticia}>
              <Image source={imgNoticia} style={styles.noticiaImagem}/>
              <Text style={styles.textNoticia}>Goldman Sachs should split CEO and chairman roles, proxy adviser ISS says</Text>
            </View>
          </View>
        </View>

        <View style={styles.rodape}>
                <View>
                    <Image source={rodape} style={styles.linhaRodape}/>
                </View>
                
                <View style={styles.conteudoRodape}>
                    <View>
                        <Text style={styles.textRodape}>Investir no mercado financeiro apresenta desafios, desde entender os produtos até gerenciar riscos. É crucial compreender as dificuldades dos investidores para melhorar suas experiências e resultados.</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.textRedes}>Nossas Redes Sociais:</Text>
                        </View>
                        <View>
                            <View style={styles.imageRedes}>
                                <Image source={facebook} style={styles.imgRodape}/>
                                <Text style={styles.textRedes}>Solutech Investments</Text>
                            </View>
                            <View style={styles.imageRedes}>
                                <Image source={instagram} style={styles.imgRodape}/>
                                <Text style={styles.textRedes}>Solutech</Text>
                            </View>
                            <View style={styles.imageRedes}>
                                <Image source={twitter} style={styles.imgRodape}/>
                                <Text style={styles.textRedes}>solutech_investments</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '85%',
  },
  noticia: {
    marginBottom: 10,
    width: '48%', 
    borderWidth: 1,
    borderColor: '#B9C7C5',

  },
  noticiaImagem: {
    width: '100%', 
    height: 150, 
    marginBottom: 10,
  },
  textNoticia: {
    fontSize: 12,
    padding:  10,
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
    paddingHorizontal: '7%'
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
