import React from 'react'
import { useState,useCallback } from 'react'
import {FlatList, View, TouchableOpacity, RefreshControl} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import CardProjeto from '../components/CardProjeto'
import {styles} from '../styles/Projetos'
import {buscar} from '../data/Projeto'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Projetos({navigation}) {
    const [dados, setDados] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false))
    }, [])

    buscar(setDados)

    function renderProjeto(itens: any){
        return <CardProjeto data={itens} navigation={navigation}></CardProjeto>
    }
  
    return (
        <>
            <FlatList
                data={dados}
                renderItem={renderProjeto}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Criar e alterar projeto')}>
                <Ionicons
                    name='add-outline'
                    color={'white'}
                    size={40}
                /> 
            </TouchableOpacity>
        </>
    );
}