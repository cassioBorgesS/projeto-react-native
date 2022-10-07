import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    botao:{
        backgroundColor: 'rgba(255, 140, 0, 0.7)',
        margin: 10,
        borderRadius: 5,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img:{
        width:120,
        height: 120,
        flexShrink: 1,
        borderRadius: 5,
    },
    cardMeio:{
        flexShrink: 10,
        width: '100%',
        justifyContent: 'flex-start',
        marginTop: 10
    },
    tema:{
        fontSize: 18,
        marginLeft: 5,
    },
    data:{
        fontSize: 16,
        marginLeft: 5,
    },
    icone:{
        flexShrink: 1,
        margin: 10
    }
});

