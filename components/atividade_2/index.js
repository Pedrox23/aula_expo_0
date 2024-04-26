import { View, Text } from 'react-native'
import Mensagem from './mensagem';

import styles from './styles';

function atividade_2() {
    return(
        <View  style={styles.container}>
            <Text style={styles.titulo}>TIMES DO ESTADO DE SÃO PAULO </Text>

            <Mensagem nome='PALMEIRAS'  estado='SP' />
            <Mensagem nome='CORINTHIANS' estado='SP'/>
            <Mensagem nome='SANTOS'  estado='SP'/>
            <Mensagem nome='SÃO PAULO' estado='SP'/>
            
            

        
        </View>

    );
}

export default atividade_2;

