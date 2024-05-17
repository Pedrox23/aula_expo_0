import { useState} from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

function atividade_3() {

    const [numero, setNumero] = useState(0);

    function incremento() {
        setNumero( numero+1 );
    }
    function Tirar() {
        setNumero( numero-1 );
    }
    function Zerar() {
        setNumero( numero-numero);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 3</Text>
            
            
            <View style={styles.container2}> 
            <Pressable
                onPress={() => incremento()}
                style={({pressed}) => pressed ? 
                [styles.botao, styles.botaoPress]
                : 
                styles.botao}
            >
                <Text style={styles.txtBotao}>+</Text>
            </Pressable>

            <Text style={styles.txtNumero}>{numero}</Text>

            <Pressable
                onPress={() => Tirar()}
                style={({pressed}) => pressed ? 
                [styles.botao, styles.botaoPress]
                : 
                styles.botao}
            >
                
                <Text style={styles.txtBotao}>-</Text>
            </Pressable>

            </View>

            <Pressable
                onPress={() => Zerar()}
                style={({pressed}) => pressed ? 
                [styles.botao, styles.botaoPress]
                : 
                styles.botao}
            >
                <Text style={styles.txtBotao}>ZERAR</Text>
            </Pressable>
        </View>

    );
}

export default atividade_3 ;