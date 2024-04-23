import { View, Text } from 'react-native'
import Mensagem from './mensagem';

import styles from './styles';

function atividade_2() {
    return(
        <View  style={styles.container}>
            <Text style={styles.titulo}>ATIVIDADE 2 </Text>

            <Mensagem nome='Palmeiras'  estado='SP' />
            <Mensagem nome='Corinthians' estado='SP'/>
            <Mensagem nome='Santos'  estado='SP'/>
            <Mensagem nome='São paulo' estado='SP'/>
            
            

        
        </View>

    );
}

export default atividade_2;

