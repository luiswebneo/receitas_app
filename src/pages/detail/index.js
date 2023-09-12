import { View, Text, StyleSheet } from 'react-native';

export function Detail(){
    return(
        <View styLe={styles.container}>
            <Text>Pagina Detalhes da Receitas!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yelow'
    }
})