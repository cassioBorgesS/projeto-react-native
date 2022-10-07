import {Text, TouchableOpacity,  View, FlatList, TextInput } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react'
import CardItem from '../components/CardItem'
import CardProjetoDetalhado from '../components/CardProjetoDetalhado'
import React from 'react'
import { styles } from '../styles/Itens'


export default function Itens({navigation, route}) {
    const item = route.params.projeto

    function renderItem(itens: any){
        return <CardItem data={itens}/>
    }
    return (
        <>
            <CardProjetoDetalhado item={item} navigation={navigation}/>
            <View style={styles.form}>
                <TextInput style={styles.input}></TextInput>
                <TouchableOpacity style={styles.botao}>
                    <Text><Ionicons name='add' color={'white'} size={40}/></Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={route.params.projeto.itens}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    );
  }