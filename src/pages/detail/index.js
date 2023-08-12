import { View, Text, StyleSheet } from 'react-native';

export function Details(){
    return(
        <View styLe={styles.container}>
            <Text>Pagina Detalhes da Receitas!</Text>
        </View>
    )
}

const styles = StyLeSheet.create({
    container:{
        backgroundColor: 'yelow',
    }
})