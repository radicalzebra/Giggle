import { View, Text,ScrollView,FlatList } from 'react-native'
import React from 'react'

const HorizontalScroll = ({children}) => {


  return (
    <View className="flex relative">
      <ScrollView scrollEventThrottle={16}  horizontal={true} showsHorizontalScrollIndicator={false}  className=" bg-red-90 w-screen h-5/6 ">{children}</ScrollView>
    </View>
  )
}

export default HorizontalScroll