import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6eeff',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold', 
        marginVertical: 20,
        color: '#673AB7'
    },
    botao: {
        borderWidth: 3,
        padding: 10,
        width: '80%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#427ad4',
        margin: 10,
    },
    txtBotao:{
        fontSize: 25,
        color: '#673AB7',
    },
    botaoPress:{
        backgroundColor: 'white',
    },
    txtNumero: {
        fontSize: 35,
        color: '#673AB7',
        marginVertical: 10,

    },
    container2: {
        display: 'inline-block',
        flex:'row',
        
    },
   

});

export default styles;