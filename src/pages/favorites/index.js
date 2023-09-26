import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native'

import { FoodList } from '../../components/foodlist'

import { getFavorites } from '../../utils/storage'

export function Favorites() {
    const [receipes, setReceipes] = useState([]);
    const IsFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;


        async function getRecipes() {
            const result = await getFavorites("@appreceitas");
            if (isActive) {
                setReceipes(result);
            }
        }
        if (isActive) {
            getRecipes();
        }

        return () => {
            console.log("Saiu da Tela")
        }

    }, [IsFocused])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favorites</Text>

            {receipes.length === 0 && (
                <Text>Voçê ainda não tem nenhuma receita slava.</Text>
            )}

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 14 }}
                data={receipes}
                keyExtractor={ (item) => String(item.id)}
                renderItem={ ({ item }) => <FoodList data={item} />}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36
    },
    title: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 24,
    }
})