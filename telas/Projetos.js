import { StyleSheet, FlatList, View, TouchableOpacity, Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react'
import Projeto from '../componentes/Projeto'

export default function Projetos({navigation}) {

    const [dados, setDados] = useState([])
    fetch('https://6330ad26cff0e7bf70e0551e.mockapi.io/projeto')
    .then(res => res.json())
    .then(data => setDados(data))
    .catch(
        res =>{return <View/>} 
    )

    function renderProjeto(itens){
        return <Projeto data={itens} navigation={navigation}></Projeto>
    }
  
    return (
        <>
            <FlatList
                data={dados}
                renderItem={renderProjeto}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('Novo Projeto')}>
                <Ionicons
                    name='add-circle'
                    color={'white'}
                    size={40}
                /> 
                <Text style={styles.textoBotao} >Novo projeto</Text> 
            </TouchableOpacity>
        </>
    );
  }
  
  const styles = StyleSheet.create({
    
    botao:{
        backgroundColor: '#2b0052',
        color: 'white',
        margin: 10,
        borderColor: 'white',
        borderWidth: 1,
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
  