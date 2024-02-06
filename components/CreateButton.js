import { View, Text , Pressable} from 'react-native'
import React ,{useState} from 'react'
import {PlusIcon} from "react-native-heroicons/outline"


export default function CreateButton() {
  
  const [touch,setTouch] = useState(false)

  return (
    <Pressable onPress={()=> setTouch(prev => !prev)} className="relative bg-red-90 w-14 h-14 rounded-full ">
         {touch && <View className={`bg-white  absolute p-1  w-full h-full  flex-row items-center justify-center border-blac border-2 rounded-full top-1 ${touch && "bg-black"}`}>
            <PlusIcon color="black" fill="black" size={24} />
         </View>}

         <View className={`bg-white  p-1  w-full h-full  flex-row items-center justify-center border-black border-2 rounded-full relative ${touch && "bg-yellow-500 "} `}>
            <PlusIcon color="black" fill="black" size={touch ? 33 : 27} />
         </View>
    </Pressable>
  )
}