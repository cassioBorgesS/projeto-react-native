import { StyleSheet, Text, TouchableOpacity,  View, ListViewComponent, FlatList} from 'react-native'
import { useState } from 'react'
import Item from '../componentes/Item'
import Projeto from '../componentes/Projeto'


export default function Itens({navigation, route}) {
    const item = route.params.projeto

    function renderItem(itens){
        return <Item data={itens} navigation={navigation}></Item>
    }
    return (
        <>
            <Projeto data={{"item": item}} navigation={navigation}/>
            <FlatList
                data={route.params.projeto.itens}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
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
    label:{
        fontSize: 16,
        color: 'white',
        marginLeft: 5
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  });
  