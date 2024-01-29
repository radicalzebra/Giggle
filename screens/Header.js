import { View, Text,Image,TextInput, ActivityIndicator} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../assets/Logo.png"
import Search from "../assets/Search.png"
import {ChevronDownIcon,UserIcon,SearchIcon} from "react-native-heroicons/outline"


export default function Header (props) {
  const navigation = useNavigation()

  useLayoutEffect(()=>{
      navigation.setOptions({
         headerTitle:"Testing",
         headerShown:false,
      })
  },[])

  return (
    <SafeAreaView className="bg-red-4 p-3 pt-5 ">

      <View className="flex-row justify-between">

         <View className="flex-row items-cente gap-2">
            <Image source={Logo}  className="w-11 h-11" />
            <View>
               <Text className="text-gray-500">username</Text>
               <Text className="text-lg font-bold ">baby name <Text>💕</Text></Text>
            </View>
         </View>

         <View className="flex-row text-md scale-125 items-center mr-2 gap-1">
            <Text>
               <Text>10</Text>
               /
               <Text>10</Text>
            </Text>

            <Text>⚡</Text>
         </View>

      </View>

      {props.children}


    </SafeAreaView>
  )
}