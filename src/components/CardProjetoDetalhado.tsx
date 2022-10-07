import React, { useState } from 'react';
import { Text, TouchableOpacity,  View, Image} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { format } from 'date-fns'
import {styles} from '../styles/CardProjetoDetalhado'

export default function CardProjeto({item,navigation}) {
    const [date, setDate] = useState(format(new Date(item.data), 'dd/MM/yyy'))

    return (
        <View  style={styles.card} >
            <Image style={styles.img} source={{uri: item.img}}/>
            <View style={styles.cardMeio}>
                <View style={styles.cardTema}>
                    <Text style={styles.tema}>{item.tema}</Text>
                    <Text style={styles.data}>{date}</Text>
                </View>
                <TouchableOpacity style={styles.botaoAlterar}>
                    <Ionicons
                        name='pencil'
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.textoDescricao}>{item.descricao}</Text>
        </View>
    );
}
    
