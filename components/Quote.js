import { View, Text } from 'react-native'
import React from 'react'

export default function Quote({quote,by}) {
  return (
    <View className="items-center bg-gray-200 p-2">
         <Text className="text-md font-medium">{quote}</Text>
         <Text className="text-gray-400 font-semibold mt-2 ">{by}</Text>
    </View>
  )
}