import { View, Text,Image } from 'react-native'
import React from 'react'
import LogoCar from  "../assets/LogoCar.png"
import More from  "../assets/More.png"


const HighlightProducts = ({source,end=false}) => {

  if(end) return (
   <View className="p- border-2 border-black rounded-full w-20 h-20 mr-3">
      <Image source={source || More} className="h-full w-full  rounded-full"/>
    </View>
  )

  return (
    <View className="p-1 border-2 border-red-700 rounded-full w-20 h-20 mr-3">
      <Image source={source || LogoCar} className="h-full w-full  rounded-full"/>
    </View>
  )
}

export default HighlightProducts