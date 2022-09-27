import { StyleSheet, Text, TouchableOpacity,  View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useState } from 'react';

export default function Item({navigation, data}) {
    const [dataItem, setData] = useState(new Date(data.item.data))
    return (
        <View>
            <TouchableOpacity style={styles.botao}>
                
                <Text style={styles.item}>
                    <Ionicons
                        name='add'
                        color='black'
                        size={16}
                        style={styles.item}
                    />
                    {data.item.nome}
                </Text>
                <Text style={styles.item}>data: {dataItem.toLocaleDateString()}</Text>
                <Text style={styles.item}>hora: {dataItem.toLocaleTimeString()}</Text>
            </TouchableOpacity>
        </View>
    );
}
  
const styles = StyleSheet.create({
    
    botao:{
        margin: 10,
        flexDirection: 'row',
        flexShrink: 2,
        flexWrap:'wrap' ,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
});
  