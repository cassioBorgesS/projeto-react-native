import React from 'react';
import { StyleSheet, Text, TouchableOpacity,  View, } from 'react-native'

export default function Projeto({data,navigation}) {
    function statusCode(s: boolean){
        if (s) {
            return 'ativo'
        } else {
            return 'inativo'
        }
    }
    return (
        <View style={styles.projeto}>
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Itens',{projeto : data.item})}
                onLongPress={() => navigation.navigate('Projetos')}
            >
                <Text style={styles.nome}>{data.item.nome}</Text>
                <Text style={styles.label}>status: {statusCode(data.item.status)}</Text>
            </TouchableOpacity>
        </View>
    );
}
    
const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#4b0082',
        margin: 10,
        borderRadius: 15,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nome:{
        fontSize: 18,
        color: 'white',
        marginLeft: 5
    },
    label:{
        fontSize: 16,
        color: 'white',
        marginLeft: 5
    },
});
