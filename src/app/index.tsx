import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useState } from 'react'

import { CATEGORIES } from "@/utils/data/products"
import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0])

    function handleCategorySelect(selectedCategory: string) {
        setCategory(selectedCategory)
    }

    return (
        <View className="bg-slate-900 flex-1 pt-8">
            <Header title="Faça seu pedido" cardQuantityItems={3} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelected={item === category}
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                className='max-h-10 mt-5'
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }} />
        </View>
    )
}