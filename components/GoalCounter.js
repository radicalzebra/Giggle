import { View, Text } from 'react-native'
import React from 'react'

export default function GoalCounter({done,length}) {
  return (
    <View className="flex-row justify-center mt-5">
        <Text className="font-semibold text-lg">{done} / {length}</Text>
    </View>
  )
}