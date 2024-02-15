import { View, Text, StyleSheet } from 'react-native'
import { Header } from '@/components/header'

export default function Home() {
    return (
        <View className="bg-slate-900 flex-1 pt-8">
            <Header title="Faça seu pedido" />
        </View>
    )
}