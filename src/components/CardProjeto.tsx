import React, { useState, useCallback } from 'react';
import {Text, TouchableOpacity,  View, Image, Alert, DevSettings, RefreshControl} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { format } from 'date-fns'
import {styles} from '../styles/CardProjeto'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function CardProjeto({data,navigation}) {
    const [date, setDate] = useState(format(new Date(data.item.data), 'dd/MM/yyyy'))
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false))
    }, [])
    function deletarProjeto() {
        Alert.alert(
            'Deletar',
            'Deseja deletar esse projeto?',
            [
                {text: 'não'},
                {text: 'sim', onPress: ()=>{
                    fetch(`https://6330ad26cff0e7bf70e0551e.mockapi.io/projeto/${data.item.id}`,{
                    method: 'DELETE'
                    }).then( () => {
                        Alert.alert('','Projeto deletado com sucesso')
                        data.item = null
                    }).catch( res => { Alert.alert('','Não foi possível deletar o projeto')})

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
    
