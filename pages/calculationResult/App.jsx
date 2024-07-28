import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

export default function ResultadoInvestimento({ route, navigation }) {
    const { selectedInvestmentType, selectedFixedRateType, investimentoInicial, investimentoMensal, prazoInvestimento, rentabilidadeAnual, valorFinal, imposto } = route.params;
    const rentabilidade = rentabilidadeAnual + 100;
    const totalMeses = prazoInvestimento * 12;
    const valorTotalAplicado = (investimentoInicial + (investimentoMensal * totalMeses)).toFixed(2);
    const valorTotalBruto = valorFinal.toFixed(2);  
    const valorGanhoJuros = (valorTotalBruto - valorTotalAplicado).toFixed(2);
    const impostoPago = (valorGanhoJuros * imposto).toFixed(2); 
    const valorFinalLiquido = (valorTotalBruto - impostoPago).toFixed(2); 

    return (
        <ScrollView style={styles.container}>
            <Menu navigation={navigation}/>
            <View style={styles.conteudo}>
                <View style={styles.conteudoTitle}>
                    <Text style={styles.titulo}>MINHA SIMULAÇÃO</Text>
                    <Text style={styles.subtitulo}>Veja os resultados de nossa simulação</Text>
                </View>
                <View style={styles.simulacao}>
                    <View style={styles.separacao}>
                        <View>
                            <Text style={styles.simulacaoTexto}>Tipo de Investimento:</Text>
                            <TextInput
                                style={styles.input}
                                value={selectedInvestmentType}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.simulacaoTexto}>Tipo de Taxa:</Text>
                            <TextInput
                                style={styles.input}
                                value={selectedFixedRateType}
                                editable={false}
                            />
                        </View>
                    </View>
                    <View style={styles.separacao}>
                        <View>
                            <Text style={styles.simulacaoTexto}>Investimento Inicial:</Text>
                            <TextInput
                                style={styles.input}
                                value={`R$ ${investimentoInicial.toFixed(2)}`}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.simulacaoTexto}>Investimento Mensal:</Text>
                            <TextInput
                                style={styles.input}
                                value={`R$ ${investimentoMensal.toFixed(2)}`}
                                editable={false}
                            />
                        </View>
                    </View>
                    <View style={styles.separacao}>
                        <View>
                            <Text style={styles.simulacaoTexto}>Prazo:</Text>
                            <TextInput
                                style={styles.input}
                                value={`${prazoInvestimento.toString()} Ano(s)`}
                                editable={false}
                            />
                        </View>
                        <View>
                            <Text style={styles.simulacaoTexto}>Rentabilidade Anual:</Text>
                            <TextInput
                                style={styles.input}
                                value={`${rentabilidade}%`} 
                                editable={false}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.titulo}>RESULTADO</Text>
                <View style={styles.simulacao}>
                    <View style={styles.separacaoResultado}>
                        <View style={styles.textoGeral}>
                            <Text style={styles.resultadoTitulo}>Valor Total Bruto:</Text>
                            <Text style={styles.resultadoTexto}> {`R$ ${valorTotalBruto}`} </Text>
                        </View>
                        <View style={styles.textoGeral}>
                            <Text style={styles.resultadoTitulo}>Valor Total Investido:</Text>
                            <Text style={styles.resultadoTexto}> {`R$ ${valorTotalAplicado}`} </Text>
                        </View>
                    </View>
                    <View style={styles.separacaoResultado}>
                        <View style={styles.textoGeral}>
                            <Text style={styles.resultadoTituloPositivo}>Valor Ganho em Juros:</Text>
                            <Text style={styles.resultadoTextoPositivo}> {`R$ ${valorGanhoJuros}`} </Text>
                        </View>
                        <View style={styles.textoGeral}>
                            <Text style={styles.resultadoTituloPositivo}>Valor Final Líquido:</Text>
                            <Text style={styles.resultadoTextoPositivo}> {`R$ ${valorFinalLiquido}`} </Text>
                        </View>
                    </View>
                    <View style={styles.separacaoResultado}>
                        <View style={styles.textoGeral}>
                            <Text style={styles.resultadoTituloNegativo}>Imposto (%):</Text>
                            <Text style={styles.resultadoTextoNegativo}> {`${(imposto * 100).toFixed(2)}%`} </Text>
                        </View>
                        <View style={styles.textoGeral}>
                            <Text style={styles.resultadoTituloNegativo}>Valor Pago em Impostos:</Text>
                            <Text style={styles.resultadoTextoNegativo}>{`R$ ${impostoPago}`}</Text>
                        </View>
                    </View>
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
    simulacao: {
        paddingHorizontal: '1%',
        paddingVertical: '6%',
        borderColor: '#20515E',
        borderStyle: 'solid',
        borderWidth: 3,
        width: '100%',
        alignItems: 'center',
        marginTop: 5,
    },
    separacao: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    separacaoResultado: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 15,
    },
    simulacaoTexto: {
        fontSize: 12,
        marginBottom: 5,
        color: '#E4A96A',
    },
    input: {
        height: 40,
        width: 140,
        backgroundColor: '#D9D9D9',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: '#D9D9D9'
    },
    textoGeral: {
        height:60,
        width: 140,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#D9D9D9'
    },
    resultadoTexto: {
        color:'#000',
    },
    resultadoTitulo: {
        fontSize: 10,
        marginBottom: 4,
    },
    resultadoTituloPositivo: {
        fontSize: 10,
        marginBottom: 4,
        color: '#00BF35',
    },
    resultadoTextoPositivo: {
        color: '#00BF35',
    },
    resultadoTituloNegativo: {
        fontSize: 10,
        marginBottom: 4,
        color: '#FF0000',
    },
    resultadoTextoNegativo: {
        color: '#FF0000',
    }
});
