import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

const rodape = require('../../assets/linha-rodape.png');  

export default function Moeda({ navigation }) {
  const [valorReal, setValorReal] = useState('');
  const [valorDolar, setValorDolar] = useState('');

  const handleCambio = (valor) => {
    setValorReal(valor);
    const valorEmReal = parseFloat(valor);
    if (!isNaN(valorEmReal)) {
      const valorConvertido = (valorEmReal * 5.13).toFixed(2);
      setValorDolar(valorConvertido);
    } else {
      setValorDolar('');
    }
  };

  const tableData = [
    { id: 1, moeda: 'Peso Argentino', compra: 0.0059, venda: 0.0059, var: 1.72 },
    { id: 2, moeda: 'Dólar AU', compra: 3.305, venda: 3.31, var: -0.3252 },
    { id: 3, moeda: 'Dólar Canadense', compra: 3.709, venda: 3.714, var: 0.6203 },
    { id: 4, moeda: 'Franco Suiço', compra: 0.4217, venda: 0.4218, var: -87 },
    { id: 5, moeda: 'Dólar Comercial', compra: 5.076, venda: 5.077, var: 1.41 },
    { id: 6, moeda: 'Dólar Turismo', compra: 5.112, venda: 5.292, var: 1.41 },
    { id: 7, moeda: 'Euro', compra: 5.452, venda: 5.454, var: 0.3681 },
    { id: 8, moeda: 'Libra Esterlina', compra: 6.365, venda: 6.367, var: 0.4259 },
    { id: 9, moeda: 'Iene', compra: 0.0478, venda: 0.0478, var: 0.8439 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Menu navigation={navigation} />

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>CÂMBIO - REAL X MOEDAS</Text>
          <Text style={styles.subtitulo}>Saiba tudo sobre as principais moedas do mundo</Text>
        </View>

        <View style={styles.tabelaMoedas}>
          <ScrollView style={styles.containerTabela}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellNameMoeda}>Moeda</Text>
                <Text style={styles.tableCellName}>Compra</Text>
                <Text style={styles.tableCellName}>Venda</Text>
                <Text style={styles.tableCellName}>VAR%</Text>
              </View>
              <View>
                <Image source={rodape} style={styles.linhaRodape} />
              </View>
              {tableData.map((item) => (
                <View key={item.id} style={styles.tableRow}>
                  <Text style={styles.tableCellMoeda}>{item.moeda}</Text>
                  <Text style={styles.tableCell}>{item.compra}</Text>
                  <Text style={styles.tableCell}>{item.venda}</Text>
                  <Text style={[styles.tableCell, item.var >= 0 ? styles.varPositive : styles.varNegative]}>{item.var}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.inputMoedas}>
          <Text style={styles.tituloInput}>Conversor de Moedas</Text>
          <View style={styles.inputConteudo}>
            <Text style={styles.textValores}>Valores</Text>
            <View style={styles.inputGeral}>
              <TextInput
                style={styles.input}
                placeholder="Digite o valor em real"
                value={valorReal}
                onChangeText={handleCambio}
                keyboardType="numeric"
              />
              <Text style={styles.textInput}>Real</Text>
            </View>

            <View style={styles.inputGeral}>
              <TextInput
                placeholder="O resultado aparecerá aqui"
                style={styles.input}
                value={valorDolar}
                editable={false}
              />
              <Text style={styles.textInput}>Dólar</Text>
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
    width: '100%',
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
  linhaRodape: {
    height: 2,
    width: '100%',
    marginBottom: '2%',
  },
  tabelaMoedas: {
    width: '80%',
  },
  containerTabela: {
    width: '100%',
  },
  table: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableCellName: {
    flex: 5,
    padding: 8,
    textAlign: 'center',
    fontSize: 12,
  },
  tableCellNameMoeda: {
    flex: 5,
    padding: 8,
    textAlign: 'start',
    fontSize: 12,
  },
  tableCell: {
    flex: 5,
    padding: 8,
    textAlign: 'center',
    fontSize: 10,
  },
  tableCellMoeda: {
    flex: 5,
    padding: 8,
    textAlign: 'start',
    fontSize: 10,
  },
  varPositive: {
    color: 'green',
  },
  varNegative: {
    color: 'red',
  },
  inputMoedas: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  }, 
  tituloInput: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#797777',
    marginTop: '8%',
    marginBottom: '3%'
  },
  inputConteudo: {
    width: '76%',
  },
  inputGeral: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  input: {
    height: 35,
    width: 220,
    borderColor: '#20515E',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#E8E9E4',
  },
  textValores: {
    fontSize: 12,
    color: '#E4A96A',
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  textInput: {
    width: '20%',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#797777',
    borderColor: '#20515E',
    borderWidth: 1,
    padding: '2.8%',
    borderRadius: 10,
  }
});
