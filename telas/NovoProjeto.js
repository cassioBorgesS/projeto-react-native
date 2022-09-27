import { StyleSheet, Text, TouchableOpacity,  TextInput, View} from 'react-native'
import { useState } from 'react';
import {RadioButton} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'

export default function NovoProjeto({navigation}) {
    const [status, setStatus] = useState('inativo')
    const [nome, setNome] = useState('')

    function postarProjeto() {
        fetch('https://6330ad26cff0e7bf70e0551e.mockapi.io/projeto',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'status': status,
                'nome': nome
            })
        }).then(
            data => {
                console.log(data)
                alert('Projeto cadastrado com sucesso')
                navigation.popToTop()
            }
        ).catch(
            res => {
                console.log(res)
                alert('Projeto não cadastrado')
            }
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>nome:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o nome do novo projeto'
                onChangeText={() => setNome()}
            />
            <Text style={styles.label}>status: </Text>
            <View style={styles.radioGroup}>
                <RadioButton
                    value='ativo'
                    status={ status === 'ativo' ? 'checked' : 'unchecked' }
                    onPress={() => setStatus('ativo')}
                />
                <Text>ativo   </Text>
                 <RadioButton
                    value='inativo'
                    status={ status === 'inativo' ? 'checked' : 'unchecked' }
                    onPress={() => setStatus('inativo')}
                />
                <Text>inativo   </Text>
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => postarProjeto()}>
                <Ionicons
                    name='add-circle'
                    color={'white'}
                    size={40}
                /> 
                <Text style={styles.textoBotao}>Criar projeto</Text> 
            </TouchableOpacity>
        </View>
    );
}
    
const styles = StyleSheet.create({
    container:{
        height:'100%',
        padding: 15,
    },
    label:{
        fontSize: 16,
        marginLeft: 5,
        marginTop: 10
    },
    input: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
    },
    radioGroup: {
        flexDirection:'row',
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#2b0052',
        margin: 10,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    textoBotao: {
        color: 'white',
        fontSize: 20
    }
});
