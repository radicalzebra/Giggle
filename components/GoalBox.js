import { View, Text,Pressable } from 'react-native'
import React, { useState } from 'react'
import { ChevronDownIcon } from "react-native-heroicons/outline"


export default function GoalBox({goal}) {

  const [touch,setTouch]= useState(false)

  

  return (

   <View className="bg-red-90 p-5 scale-90">

    <Pressable className={`bg-blue-90`} onPress={() => setTouch(prev=> !prev)}>
         {/* backlay */}
         <View className={`bg-gray-20 p-3 rounded-xl border-black border-2 absolute top-1 left-0.5 -z-1  w-full ${touch && " bg-gray-900 top-1.5 left-1.5 transform-all"}`}>
            <Text numberOfLines={touch ? 20 : 1}  ellipsizeMode="tail" className="w-full text-lg ">.</Text>
         </View>

         <View className={`bg-gray-100 p-3 px-8  rounded-xl border-black border-2   flex-row items-center justify-between relative ${touch && "bg-yellow-300"}`}>
            <Text numberOfLines={touch ? 20 : 1} ellipsizeMode="tail" className={`text-lg w-full font-normal ${touch && " font-bold"}`}>Some are born great</Text>
         </View>

     </Pressable>
   </View>

  )
}