import { View, Text,Pressable } from 'react-native'
import React, { useState } from 'react'
import { PencilSquareIcon,TrashIcon} from "react-native-heroicons/outline"
import Check from "./Check"


export default function GoalBox({goal}) {

  const [touch,setTouch]= useState(false)

  const buttonTouched = () => {
     setTouch(prev => !prev)
  }

  

  return (

   <View className="bg-red-90 p-5 scale-90 h-full w-screen">

    <Pressable className={`bg-blue-90 h-full w-full `} o>
         {/* backlay */}
         <View className={`bg-gray-20 p-3 rounded-xl border-black border-2 absolute top-2 left-1 -z-1  w-full h-full ${touch && " bg-gray-900 top-1.5 left-1.5 transform-all"}`}>
            <Text numberOfLines={touch ? 20 : 1}  ellipsizeMode="tail" className="w-full text-lg ">.</Text>
         </View>

         <View className={`bg-gray-50 p-3 px-5  rounded-xl border-black border-2  h-full justify-start relative ${touch && ""}`}>
            <Text className="text-base font-bold mb-4 text-cente max-w-full  bg-gray-900 text-white  rounded-full p-1 pl-3 pr-3 flex-wrap self-start ">Develop</Text>
            <Text ellipsizeMode="tail" className={`text-xl w-full font-normal bg-red-90 h-4/6 ${touch && " font-bol"}`}>
               "As dawn breaks over the horizon, painting the sky in hues of pink and gold, the world stirs awake, greeted by the gentle rustle of leaves and the chorus of birdsong. In this tranquil moment, nature whispers secrets of serenity, inviting us to pause, breathe, and embrace the beauty of the unfolding day."
            </Text>
            
            <View className="flex-row  bg-blue-90 h-1/6 justify-between items-center">
              <View className="flex-row items-center gap-5">
                 <TrashIcon color={"black"} size={30}/>
                 <PencilSquareIcon color={"black"} size={30}/>
              </View>
              <Check buttonTouched={buttonTouched}/>
            </View>
         </View>

         

     </Pressable>
   </View>

  )
}