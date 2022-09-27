import { StyleSheet, Text, TouchableOpacity,  View, ListViewComponent, FlatList } from 'react-native'
import { useState } from 'react'
import Item from '../components/Item'
import Projeto from '../components/Projeto'
import React from 'react'
import { styles } from './Itens'


export default function Itens({navigation, route}) {
    const item = route.params.projeto

    function renderItem(itens: any){
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