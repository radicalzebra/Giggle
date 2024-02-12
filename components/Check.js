import { View, Text , Pressable} from 'react-native'
import React ,{useState} from 'react'
import {CheckIcon} from "react-native-heroicons/mini"


export default function Check({buttonTouched}) {
  
  const [touch,setTouch] = useState(false)

  const onTouch = () => {
    setTouch(prev => !prev)
    buttonTouched()
  }

  return (
    <Pressable onPress={onTouch} className={`bg-red-90 w-12 h-12 rounded-full  `}>
         {touch && <View className={`bg-white  absolute p-1  w-full h-full  flex-row items-center justify-center border-blac border-2 rounded-full top-1 ${touch && "bg-black"}`}>
            <CheckIcon color="black" fill="black" size={24} />
         </View>}

         <View className={`bg-white  p-1  w-full h-full  flex-row items-center justify-center border-black border-2 rounded-full relative ${touch && "bg-yellow-500 "} `}>
            <CheckIcon color="" fill="" size={touch ? 33 : 27} />
         </View>
    </Pressable>
  )
}