import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container:{
        height:'100%',
        padding: 15,
    },
    label:{
        fontSize: 16,
        marginLeft: 5,
        marginTop: 10
    },
    input: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
    },
    radioGroup: {
        flexDirection:'row',
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#2b0052',
        margin: 10,
        borderRadius: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    botaoImg:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ddd',
        width: 80,
        marginVertical: 20,
        borderRadius: 5,
    },
    imagemRetorno:{
        width: '100%',
        height: 340,
        borderColor: '#ddd',
        borderWidth: 2
    }
});
