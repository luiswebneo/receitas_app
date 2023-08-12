import { View, Text, StyleSheet } from 'react-native';

export function Search(){
    return(
        <View styLe={styles.container}>
            <Text>Pagina Search!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
    }
})