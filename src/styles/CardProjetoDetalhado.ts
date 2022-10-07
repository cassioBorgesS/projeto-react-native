import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card:{
        margin: 10,
        borderRadius: 5,
    },
    img:{
        width:'100%',
        height: 120,
        flexShrink: 1
    },
    cardMeio:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 20
    },
    cardTema:{
        marginVertical: 15,
        justifyContent: 'space-between'

    },
    tema:{
        fontSize: 18,
    },
    data:{
        fontSize: 16,
    },
    botaoAlterar:{
        backgroundColor: '#ddd',
        padding: 3,
        borderRadius: 4
    },
    icone:{
        flexShrink: 1
    },
    descricao:{
    },
    textoDescricao:{
        fontSize: 16
    }
});
