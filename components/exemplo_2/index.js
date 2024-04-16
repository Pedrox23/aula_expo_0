import { View, Text } from 'react-native'
import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2() {
    return(
        <View  style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem nome='Pedro'  sobrenome='Martins' />
            <Mensagem nome='Murilo' idade={16}/>
            <Mensagem nome='João vitor' />
            
            

        
        </View>

    );
}

export default Exemplo2;