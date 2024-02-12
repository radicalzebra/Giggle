import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { OverlayActions } from '../store/OverlaySlice'
import { useDispatch } from 'react-redux'


export default function OverlayNoteButton({text,save=false}) {

  const [touch,setTouch] = useState(false)
  const dispatch = useDispatch()
  
  const  onPressHandler = () => {
     setTouch(true)
     setTimeout(()=>{
        setTouch(false)
      },100)
     
      dispatch(OverlayActions.showOverlay(false))
  }



  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPressHandler}   className={`bg-red- w-32 h-12 rounded-full mx-3 ${save && " w-20 h-10 "}`}>
         {/* backlay */}
         <View className={`bg-black  absolute p-1  w-full h-full  flex-row items-center justify-center border-blac border-2 rounded-full top-1 ${touch && "top-0.5"} `}>
           
         </View>

         <View className={`bg-yellow-400  p-1  w-full h-full  flex-row items-center justify-center border-black border-2 rounded-full relative font-semibold ${save && " bg-white"} `}>
            <Text className=" text-base font-semibold ">{text}</Text>
         </View>
    </TouchableOpacity>
  )
}