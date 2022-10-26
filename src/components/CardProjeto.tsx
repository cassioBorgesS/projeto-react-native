import React, { useState} from 'react';
import {Text, TouchableOpacity,  View, Image, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { format } from 'date-fns'
import {styles} from '../styles/CardProjeto'
import { ProjetoAPI } from '../data/ProjetoAPI';

export default function CardProjeto({data,navigation, setDados}) {
    const [date, setDate] = useState(format(new Date(data.item.data), 'dd/MM/yyyy'))

    function deletarProjeto() {
        Alert.alert(
            'Deletar',
            'Deseja deletar esse projeto?',
            [
                {text: 'não'},
                {text: 'sim', onPress: ()=>{
                    ProjetoAPI.deletar(data.item.id, Alert, () => setDados([]))

                }},
            ]
        )
    }
    return (
        <View>
            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => navigation.navigate('Itens',{projeto : data.item})}
                onLongPress={() => navigation.navigate('Projetos')}
            >
                <Image style={styles.img} source={{uri: data.item.img}}/>
                <View style={styles.cardMeio}>
                    <Text style={styles.tema}>{data.item.tema}</Text>
                    <Text style={styles.data}>{date}</Text>
                </View>
                <TouchableOpacity onPress={()=> deletarProjeto()}>
                    <Ionicons
                        name='trash'
                        size={25}
                        style={styles.icone}
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}
    
