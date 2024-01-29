import { View, Text,ScrollView } from 'react-native'
import React from 'react'

const HorizontalScroll = ({children}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className=" bg-red-90 overflow-hidden">{children}</ScrollView>
  )
}

export default HorizontalScroll