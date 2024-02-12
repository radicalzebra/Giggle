import { View, Text } from 'react-native'
import React from 'react'

export default function Quote({quote,by}) {
  return (
    <View className="items-center bg-gray-20 p-2 px-7 mt-2">
         <Text className="text-md font-medium">{quote || "Some are born great, some achieve greatness, and some have greatness thrust upon them"}</Text>
         <Text className="text-gray-400 font-semibold mt-2 ">{"~" }{by || "shakespeare"}</Text>
    </View>
  )
}