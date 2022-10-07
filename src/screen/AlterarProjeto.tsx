import React from 'react';
import {Text, TouchableOpacity,  TextInput, View, Image, Alert, DevSettings} from 'react-native'
import { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import {styles} from '../styles/NovoProjeto'
import  * as ImagePicker from 'expo-image-picker'


export default function NovoProjeto({navigation}) {
    const [tema, setTema] = useState('')
    const [descricao, setDescricao] = useState('')
    const [img, setImg] = useState(null)
    const buscarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.cancelled) {
            setImg(result);
        }
    }
    function verificaSePossivelPost(){
        if (tema.length < 5){
            Alert.alert('Alerta','tema com menos de 5 caracteres')
        } else  if (descricao.length < 30){
            Alert.alert('Alerta','descrição com menos de 30 caracteres')
        } else if (!img){
            Alert.alert('Alerta','imagem não pode ser nula')
        } else {
            Alert.alert(
                'Publicar',
                'Deseja publicar o projeto?',
                [
                    {  text: "Não",},
                    { text: "Sim", onPress: () => {postarProjeto()},},
                ]
            );
        }
    }
    function postarProjeto() {
        fetch('https://6330ad26cff0e7bf70e0551e.mockapi.io/projeto',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                'tema': tema,
                'descricao': descricao,
                'img': img.uri
            })
        }).then( () => {
            Alert.alert('Projeto cadastrado com sucesso')
            navigation.popToTop()
            DevSettings.reload()
        }
        ).catch( () => Alert.alert('Projeto cadastrado com sucesso'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>nome:</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite o nome do novo projeto'
                onChangeText={(prop) => setTema(prop)}
            />
            <Text style={styles.label}>descricao: </Text>
            <TextInput
                style={styles.input}
                placeholder='Digite a descrição'
                multiline={true}
                numberOfLines={6}
                onChangeText={(prop) => setDescricao(prop)}
            />
            <TouchableOpacity 
                style={styles.botaoImg}
                onPress={() => {buscarImagem()}}
            >
                <Ionicons
                    name='image'
                    size={40}
                />
                <Text>img</Text>
            </TouchableOpacity>
            <Image 
                source={img} 
                style={styles.imagemRetorno}
            />
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => verificaSePossivelPost()
            }>
                <Ionicons
                    name='checkmark'
                    color={'white'}
                    size={50}
                /> 
            </TouchableOpacity>
        </View>
    );
}
    
