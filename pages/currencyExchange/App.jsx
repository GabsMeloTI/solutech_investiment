import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, ScrollView  } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';



export default function CurrencyExchange({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const tableData = [
    { id: 1, moeda: 'Peso Argentino', compra: 0.0059, venda: 0.0059, var: 1.72 },
    { id: 2, moeda: 'Dólar Australiano', compra: 3.305, venda: 3.31, var: -0.3252 },
    { id: 3, moeda: 'Dólar Canadense', compra: 3.709, venda: 3.714, var: 0.6203 },
    { id: 4, moeda: 'Franco Suiço', compra: 0.4217, venda: 0.4218, var: -87 },
    { id: 5, moeda: 'Dólar Comercial', compra: 5.076, venda: 5.077, var: 1.41 },
    { id: 6, moeda: 'Dólar Turismo', compra: 5.112, venda: 5.292, var: 1.41 },
    { id: 7, moeda: 'Euro', compra: 5.452, venda: 5.454, var: 0.3681 },
    { id: 8, moeda: 'Libra Esterlina', compra: 6.365, venda: 6.367, var: 0.4259 },
    { id: 9, moeda: 'Iene', compra: 0.0478, venda: 0.0478, var: 0.8439 },
  ];

  return (
    <View style={styles.container}>
      <Menu navigation={navigation}/>

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>CÂMBIO - REAL X MOEDAS</Text>
          <Text style={styles.subtitulo}>Saiba tudo sobre as principais moedas do mundo</Text>
        </View>

        <View style={styles.tabelaMoedas}>
          <ScrollView style={styles.containerTabela}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.tableHeader]}>Moeda</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Compra</Text>
                <Text style={[styles.tableCell, styles.tableHeader]}>Venda</Text>
                <Text style={[styles.tableCell, styles.tableHeader, styles.varHeader]}>VAR%</Text>
              </View>
              {tableData.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{item.moeda}</Text>
                  <Text style={styles.tableCell}>{item.compra}</Text>
                  <Text style={styles.tableCell}>{item.venda}</Text>
                  <Text style={[styles.tableCell, item.var >= 0 ? styles.varPositive : styles.varNegative]}>{item.var}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.inputMoedas}>
          
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

  containerTabela: {
    width: '100%',
    flex: 5,
    padding: 16,
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 5,
    padding: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  varHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  varPositive: {
    color: 'green',
  },
  varNegative: {
    color: 'red',
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