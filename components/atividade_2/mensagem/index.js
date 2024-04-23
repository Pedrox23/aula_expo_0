import { View, Text} from 'react-native';

import styles from './styles';

export default function Mensagem ({nome, estado= ''}) {
    return(

        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{` ${nome} ${estado}`}</Text>   
        </View>
            
    );



}