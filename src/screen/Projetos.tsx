import React from 'react'
import { useState } from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import CardProjeto from '../components/CardProjeto'
import {styles} from '../styles/Projetos'
import {ProjetoAPI} from '../data/ProjetoAPI'


export default function Projetos({navigation}) {
    const [dados, setDados] = useState([])
    function renderProjeto(itens: any){
        return <CardProjeto data={itens} navigation={navigation} setDados={setDados}></CardProjeto>
    }
    
    ProjetoAPI.buscar(setDados)

  
    return (
        <>
            <FlatList
                data={dados}
                renderItem={renderProjeto}
                keyExtractor={item => item.id}
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