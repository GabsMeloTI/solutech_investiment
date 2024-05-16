import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';

const instagram = require('../../assets/instagram.png');
const facebook = require('../../assets/facebook.png');
const twitter = require('../../assets/twitterX.png');
const rodape = require('../../assets/linha-rodape.png');

export default function Footer() {
    return(
        <View style={styles.rodape}>
          <View>
            <Image source={rodape} style={styles.linhaRodape} />
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
                  <Image source={facebook} style={styles.imgRodape} />
                  <Text style={styles.textRedes}>Solutech Investments</Text>
                </View>
                <View style={styles.imageRedes}>
                  <Image source={instagram} style={styles.imgRodape} />
                  <Text style={styles.textRedes}>Solutech</Text>
                </View>
                <View style={styles.imageRedes}>
                  <Image source={twitter} style={styles.imgRodape} />
                  <Text style={styles.textRedes}>solutech_investments</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
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