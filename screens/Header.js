import { View, Text , SafeAreaView,Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import GoalsLogo from "../assets/GoalsLogo.png"



export default function Header (props) {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
      navigation.setOptions({
         headerTitle:"Testing",
         headerShown:false,
      })
  },[])

  return (
    <SafeAreaView className="bg-red-40 p-5 mt-11 flex-row justify-center ">

         <View className="flex-row items-center  gap-1 ">
            <View className="flex-row gap-1">
               <Text className="text-lg font-medium">10</Text>
               <Text className="text-lg">/</Text>
               <Text className="text-lg font-medium">10</Text>
            </View>

            <Text className="text-xl">⚡</Text>
         </View>

   
    </SafeAreaView>

  )
}