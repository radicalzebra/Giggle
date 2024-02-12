import { View, Text } from 'react-native'
import React from 'react'
import CreateButton from '../components/CreateButton'

export default function Footer() {
  return (
    <View className=" bg-green-20 p-5 h-fit flex-row justify-center">
      <View className="w-16 h-16 bg-red-90 rounded-full">
         <CreateButton/>
      </View>
    </View>
  )
}