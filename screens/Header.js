import { View, Text , SafeAreaView,Image,Pressable} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import GoalsLogo from "../assets/GoalsLogo.png"
import { ClockIcon,TrophyIcon } from 'react-native-heroicons/outline'



export default function Header (props) {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
      navigation.setOptions({
         headerTitle:"Testing",
         headerShown:false,
      })
  },[])

  return (
    <SafeAreaView className="bg-red-40 h-1/12 p-3 mt-11 mb-3 flex-row justify-between">

         <Pressable className="flex-row items-center  bg-blue-80 rounded-full px-2  ">
            <TrophyIcon size={33} color={"black"}/>
         </Pressable>

         <Pressable className="flex-row items-center bg-blue-80 rounded-full px-2  ">
            <ClockIcon size={33} color={"black"}/>
         </Pressable>


   
    </SafeAreaView>

  )
}