import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const logo = require('../../assets/logo.png');
const rodape = require('../../assets/linha-rodape.png');
const instagram = require('../../assets/instagram.png');
const facebook = require('../../assets/facebook.png');
const twitter = require('../../assets/twitterX.png');



export default function InvestmentForm({ navigation }) {
  const [objetivo, setObjetivo] = useState('');
  const [prazo, setPrazo] = useState('');
  const [meta, setMeta] = useState('');
  const [conhecimento, setConhecimento] = useState('');
  const [investiuAntes, setInvestiuAntes] = useState('');
  const [preferenciaRisco, setPreferenciaRisco] = useState('');
  const [rendaPrincipal, setRendaPrincipal] = useState('');
  const [dinheiroDisponivel, setDinheiroDisponivel] = useState('');
  const [expectativaRetorno, setExpectativaRetorno] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.lista}>
          <Text style={styles.topicos} onPress={() => navigation.navigate('Home')}>Notícias</Text>
          <Text style={styles.topicos}>Moedas</Text>
          <Text style={styles.topicos}>Cálculos</Text>
          <Text style={styles.topicos}>Sobre nós</Text>
          <Text style={styles.topicos} onPress={() => navigation.navigate('SingIn')}>Entrar</Text>
        </View>
      </View>

      <View style={styles.conteudo}>
        <View style={styles.conteudoTitle}>
          <Text style={styles.titulo}>Vamos iniciar sua jornada</Text>
          <Text style={styles.subtitulo}>Para conhecer melhor seu perfil, precisamos que responda as perguntas abaixo.</Text>
        </View>

        <View style={styles.conteudoInput}>
          {/* Objetivos Financeiros e Prazo */}
          <View style={styles.row}>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Quais são seus principais objetivos financeiros?</Text>
              <Picker
                selectedValue={objetivo}
                onValueChange={itemValue => setObjetivo(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Aposentadoria" value="aposentadoria" />
                <Picker.Item label="Compra de uma casa" value="compra_casa" />
                <Picker.Item label="Educação dos filhos" value="educacao_filhos" />
                <Picker.Item label="Viagens" value="viagens" />
                <Picker.Item label="Outro" value="outro" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Qual é o seu prazo para atingir esses objetivos?</Text>
              <Picker
                selectedValue={prazo}
                onValueChange={itemValue => setPrazo(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Curto prazo (menos de 1 ano)" value="curto_prazo" />
                <Picker.Item label="Médio prazo (1 a 5 anos)" value="medio_prazo" />
                <Picker.Item label="Longo prazo (mais de 5 anos)" value="longo_prazo" />
              </Picker>
            </View>
          </View>

          {/* Meta e Conhecimento */}
          <View style={styles.row}>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Você tem uma meta específica de quanto gostaria de alcançar com seus investimentos?</Text>
              <Picker
                selectedValue={meta}
                onValueChange={itemValue => setMeta(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Sim" value="sim" />
                <Picker.Item label="Não" value="nao" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Qual é o seu nível de conhecimento sobre investimentos?</Text>
              <Picker
                selectedValue={conhecimento}
                onValueChange={itemValue => setConhecimento(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Nenhum" value="nenhum" />
                <Picker.Item label="Básico" value="basico" />
                <Picker.Item label="Intermediário" value="intermediario" />
                <Picker.Item label="Avançado" value="avancado" />
              </Picker>
            </View>
          </View>

          {/* Investimento anterior e Preferência de Risco */}
          <View style={styles.row}>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Você já investiu em alguma coisa antes?</Text>
              <Picker
                selectedValue={investiuAntes}
                onValueChange={itemValue => setInvestiuAntes(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Sim" value="sim" />
                <Picker.Item label="Não" value="nao" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Você prefere investimentos que oferecem:</Text>
              <Picker
                selectedValue={preferenciaRisco}
                onValueChange={itemValue => setPreferenciaRisco(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Retornos mais altos com mais risco" value="altos_com_risco" />
                <Picker.Item label="Retornos mais baixos com menos risco" value="baixos_com_menos_risco" />
              </Picker>
            </View>
          </View>

          {/* Fonte de Renda e Dinheiro Disponível */}
          <View style={styles.row}>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Qual é a sua fonte principal de renda?</Text>
              <Picker
                selectedValue={rendaPrincipal}
                onValueChange={itemValue => setRendaPrincipal(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Salário" value="salario" />
                <Picker.Item label="Negócios" value="negocios" />
                <Picker.Item label="Aposentadoria" value="aposentadoria" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.desInput}>Quanto dinheiro você tem disponível para investir?</Text>
              <Picker
                selectedValue={dinheiroDisponivel}
                onValueChange={itemValue => setDinheiroDisponivel(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Menos de R$5.000" value="menos_5000" />
                <Picker.Item label="R$5.000 - R$20.000" value="5000_20000" />
                <Picker.Item label="R$20.000 - R$50.000" value="20000_50000" />
                <Picker.Item label="Mais de R$50.000" value="mais_50000" />
              </Picker>
            </View>
          </View>

          {/* Expectativas de Retorno */}
          <View>
            <Text style={styles.desInput}>Qual é a sua expectativa de retorno anual para seus investimentos?</Text>
            <Picker
              selectedValue={expectativaRetorno}
              onValueChange={itemValue => setExpectativaRetorno(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Menos de 5%" value="menos_5" />
              <Picker.Item label="5% - 10%" value="5_10" />
              <Picker.Item label="10% - 15%" value="10_15" />
              <Picker.Item label="Mais de 15%" value="mais_15" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Enviar informações</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rodape}>
          <Image source={rodape} style={styles.linhaRodape} />
          <View style={styles.conteudoRodape}>
            <Text style={styles.textRodape}>Investir no mercado financeiro apresenta desafios, desde entender os produtos até gerenciar riscos. É crucial compreender as dificuldades dos investidores para melhorar suas experiências e resultados.</Text>
            <View>
              <Text style={styles.textRedes}>Nossas Redes Sociais:</Text>
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
    width: '80%',
    textAlign: 'center',
  },
  conteudoInput: {
    padding: '10%',
    alignItems: 'center',
    backgroundColor: '#20515E',
    marginHorizontal: '5%',
  },
  desInput: {
    fontSize: 10,
    color: '#E4A96A',
    width: '100%',
    marginBottom: '2%',
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  picker: {
    height: 40,
    borderColor: '#20515E',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
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