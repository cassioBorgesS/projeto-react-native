import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    input:{
        backgroundColor: '#ddd',
        width: '80%',
        margin: 10,
        marginRight: 0,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botao:{
        width: 48,
        height: 48,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        marginRight:20,
        backgroundColor: '#555'
    }
  });