import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

export default function CalculationResult({ route }) {
    const { selectedInvestmentType, selectedFixedRateType, investimentoInicial, investimentoMensal, prazoInvestimento, rentabilidadeAnual, valorFinal } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Menu />
            <View style={styles.conteudo}>
                <View style={styles.conteudoTitle}>
                    <Text style={styles.titulo}>MINHA SIMULAÇÃO</Text>
                    <Text style={styles.subtitulo}>Veja os resultados de nossa simulação</Text>
                </View>
                <View style={styles.resultado}>
                    <View>
                        <Text style={styles.resultadoTexto}>Tipo de Investimento:</Text>
                        <TextInput
                            style={styles.input}
                            value={selectedInvestmentType}
                        />
                        
                    </View>
                    <Text style={styles.resultadoTexto}>Tipo de Taxa:</Text>
                    <Text style={styles.resultadoTexto}>Investimento Inicial: R${investimentoInicial.toFixed(2)}</Text>
                    <Text style={styles.resultadoTexto}>Investimento Mensal: R${investimentoMensal.toFixed(2)}</Text>
                    <Text style={styles.resultadoTexto}>Prazo: {prazoInvestimento} anos</Text>
                    <Text style={styles.resultadoTexto}>Rentabilidade Anual: {rentabilidadeAnual.toFixed(2)}%</Text>
                    <Text style={styles.resultadoTexto}>Valor Futuro: R${valorFinal.toFixed(2)}</Text>
                </View>
            </View>
            <Footer />
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
        padding: 20,
        backgroundColor: '#20515E',
        marginHorizontal: 30,
    },
    conteudoTitle: {
        alignItems: 'center',
        marginBottom: 20,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#797777',
        marginBottom: 2,
    },
    subtitulo: {
        color: '#797777',
        fontSize: 10,
    },
    resultado: {
        paddingHorizontal: '6%',
        paddingVertical: '6%',
        borderColor: '#20515E',
        borderStyle: 'solid',
        borderWidth: 3,
        width: '100%',
        alignItems: 'center',
    },
    resultadoTexto: {
        fontSize: 12,
        marginBottom: 10,
        color: '#E4A96A',
    },
    input: {
        height: 40,
        width: 130,
        borderColor: '#20515E',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#f2f2f2',
    },
});