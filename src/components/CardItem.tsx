import {Text, TouchableOpacity,  View} from 'react-native'
import {RadioButton} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';
import { format } from 'date-fns'
import React from 'react';
import {styles} from '../styles/CardItem'

export default function CardItem({data}) {
    const [dataItem, setData] = useState(new Date(data.item.data))
    const [status, setStatus] = useState('unchecked')
    return (
        <View style={styles.cardItem}>
            <RadioButton 
                value={'checked'} 
                status={ status === 'ativo' ? 'checked' : 'unchecked' }
                onPress={() => setStatus('ativo')}
            />
            <Text style={styles.texto}>{data.item.texto}</Text>
            <Text style={styles.data}>{format(dataItem, 'dd/MM/yyyy')}</Text>
            <TouchableOpacity>
                <Ionicons
                    name='trash'
                    size={25}
                    style={styles.trash}
                />
            </TouchableOpacity>
        </View>
    );
}
  
