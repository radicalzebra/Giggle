import { View, Text,ScrollView,FlatList } from 'react-native'
import React from 'react'

const VerticalScroll = ({children}) => {


  return (
    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}  className=" bg-red-90 h- ">{children}</ScrollView>
  )
}

export default VerticalScroll