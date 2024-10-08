import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import Menu from '../../components/menu/App';
import Footer from '../../components/footer/App';

export default function Calculation({ navigation }) {
    const [selectedInvestmentType, setSelectedInvestmentType] = useState(null);
    const [selectedFixedRateType, setSelectedFixedRateType] = useState(null);
    const [investimentoInicial, setInvestimentoInicial] = useState(0);
    const [investimentoMensal, setInvestimentoMensal] = useState(0);
    const [prazoInvestimento, setPrazoInvestimento] = useState(0);
    const [rentabilidadeAnual, setRentabilidadeAnual] = useState(0);

    const handleInvestmentTypeSelection = (type) => {
        setSelectedInvestmentType(type);
    };

    const handleFixedRateTypeSelection = (type) => {
        setSelectedFixedRateType(type);
    };

    const handleInvestimentoInicial = (value) => {
        const numericValue = parseFloat(value.replace(',', '.')) || 0;
        setInvestimentoInicial(numericValue);
    };

    const handleInvestimentoMensal = (value) => {
        const numericValue = parseFloat(value.replace(',', '.')) || 0;
        setInvestimentoMensal(numericValue);
    };

    const handlePrazoInvestimento = (value) => {
        const numericValue = parseInt(value, 10) || 0;
        setPrazoInvestimento(numericValue);
    };

    const handleRentabilidadeAnual = (value) => {
        const numericValue = parseFloat(value.replace(',', '.')) || 0;
        setRentabilidadeAnual(numericValue);
    };

    const calcularInvestimento = () => {
        let rentabilidade = 0;

        if (selectedInvestmentType === 'Tesouro') {
            if (selectedFixedRateType === 'Pré') rentabilidade = 0.08;
            else if (selectedFixedRateType === 'Pós') rentabilidade = 0.06 + 0.02; 
            else if (selectedFixedRateType === 'IPCA') rentabilidade = 0.04;
        } else if (selectedInvestmentType === 'LCI/LCA') {
            if (selectedFixedRateType === 'Pré') rentabilidade = 0.07;
            else if (selectedFixedRateType === 'Pós') rentabilidade = 0.05 + 0.02; 
            else if (selectedFixedRateType === 'IPCA') rentabilidade = 0.03;
        } else if (selectedInvestmentType === 'CDB/LC') {
            if (selectedFixedRateType === 'Pré') rentabilidade = 0.09;
            else if (selectedFixedRateType === 'Pós') rentabilidade = 0.07 + 0.02; 
            else if (selectedFixedRateType === 'IPCA') rentabilidade = 0.05;
        }

        const taxaMensal = rentabilidade / 12;
        const prazoMeses = prazoInvestimento * 12;

        let valorFinal = investimentoInicial * Math.pow(1 + taxaMensal, prazoMeses);

        for (let i = 0; i < prazoMeses; i++) {
            valorFinal += investimentoMensal * Math.pow(1 + taxaMensal, prazoMeses - i);
        }

        let imposto = 0;
        if (prazoInvestimento <= 1) imposto = 0.225;
        else if (prazoInvestimento <= 2) imposto = 0.185;
        else if (prazoInvestimento <= 3) imposto = 0.15;
        else imposto = 0.15;

        const impostoPago = valorFinal * imposto;
        const valorFinalLiquido = valorFinal - impostoPago;

        navigation.navigate('CalculationResult', {
            selectedInvestmentType,
            selectedFixedRateType,
            investimentoInicial,
            investimentoMensal,
            prazoInvestimento,
            rentabilidadeAnual: rentabilidade * 100,
            valorFinal,
            imposto,
            impostoPago,
            valorFinalLiquido
        });
    };

    return (
        <ScrollView style={styles.container}>
            <Menu navigation={navigation} />
            <View style={styles.conteudo}>
                <View style={styles.conteudoTitle}>
                    <Text style={styles.titulo}>CALCULAR INVESTIMENTO</Text>
                    <Text style={styles.subtitulo}>Conheça nossa calculadora de investimento!</Text>
                </View>
                <View style={styles.conteudoInput}>
                    <View style={styles.selectRender}>
                        <Text style={styles.desInput}>Tipo de investimento:</Text>
                        <View style={styles.optionsContainer}>
                            <TouchableOpacity
                                style={[styles.option, selectedInvestmentType === 'Tesouro' && styles.selected]}
                                onPress={() => handleInvestmentTypeSelection('Tesouro')}
                            >
                                <Text style={[styles.optionText, selectedInvestmentType === 'Tesouro' && styles.selectedText]}>Tesouro</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.option, selectedInvestmentType === 'LCI/LCA' && styles.selected]}
                                onPress={() => handleInvestmentTypeSelection('LCI/LCA')}
                            >
                                <Text style={[styles.optionText, selectedInvestmentType === 'LCI/LCA' && styles.selectedText]}>LCI/LCA</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.option, selectedInvestmentType === 'CDB/LC' && styles.selected]}
                                onPress={() => handleInvestmentTypeSelection('CDB/LC')}
                            >
                                <Text style={[styles.optionText, selectedInvestmentType === 'CDB/LC' && styles.selectedText]}>CDB/LC</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.desInput}>Pré fixado ou Pós fixado?</Text>
                        <View style={styles.optionsContainerDiferent}>
                            <TouchableOpacity
                                style={[styles.option, selectedFixedRateType === 'Pré' && styles.selected]}
                                onPress={() => handleFixedRateTypeSelection('Pré')}
                            >
                                <Text style={[styles.optionText, selectedFixedRateType === 'Pré' && styles.selectedText]}>Pré</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.option, selectedFixedRateType === 'Pós' && styles.selected]}
                                onPress={() => handleFixedRateTypeSelection('Pós')}
                            >
                                <Text style={[styles.optionText, selectedFixedRateType === 'Pós' && styles.selectedText]}>Pós</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.option, selectedFixedRateType === 'IPCA' && styles.selected]}
                                onPress={() => handleFixedRateTypeSelection('IPCA')}
                            >
                                <Text style={[styles.optionText, selectedFixedRateType === 'IPCA' && styles.selectedText]}>IPCA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.desInput}>Investimento inicial:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o valor"
                            value={investimentoInicial.toString()}
                            onChangeText={handleInvestimentoInicial}
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.desInput}>Investimento mensal:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o valor"
                            value={investimentoMensal.toString()}
                            onChangeText={handleInvestimentoMensal}
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.desInput}>Prazo (em anos):</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o prazo"
                            value={prazoInvestimento.toString()}
                            onChangeText={handlePrazoInvestimento}
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <Text style={styles.desInput}>Rentabilidade Anual:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a rentabilidade"
                            value={rentabilidadeAnual.toString()}
                            onChangeText={handleRentabilidadeAnual}
                            keyboardType="numeric"
                        />
                    </View>
                    <TouchableOpacity style={styles.botao} onPress={calcularInvestimento}>
                        <Text style={styles.textoBotao}>Calcular</Text>
                    </TouchableOpacity>
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
    conteudoInput: {
        paddingHorizontal: '6%',
        paddingVertical: '6%',
        alignItems: 'center',
        borderColor: '#20515E',
        borderStyle: 'solid',
        borderWidth: 3,
    },
    selectRender: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '6%',
    },
    optionsContainerDiferent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    option: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        width: '30%',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
    },
    selected: {
        backgroundColor: '#20515E',
    },
    selectedText: {
        color: '#E4A96A',
    },
    desInput: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#E4A96A',
        width: '80%',
        marginBottom: '2%',
    },
    input: {
        height: 40,
        width: 280,
        borderColor: '#20515E',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: '#f2f2f2',
    },
    botao: {
        marginTop: '2%',
        backgroundColor: '#20515E',
        paddingHorizontal: '18%',
        paddingVertical: '3%',
        borderRadius: 10,
    },
    textoBotao: {
        color: '#E4A96A',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
});
