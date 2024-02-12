import { View, Text } from 'react-native'
import React from 'react'
import HorizontalScroll from '../components/HorizontalScroll'
import GoalCounter from '../components/GoalCounter'
import GoalBox from '../components/GoalBox'
import Quote from '../components/Quote'


const Body = () => {
  return (
    <View className="bg-red-90 h-3/4">

      <Quote/>
         
      <GoalCounter done={0} length={15}/>
      
      <HorizontalScroll>
         <GoalBox/>
         <GoalBox/>
         <GoalBox/>
         <GoalBox/>
         <GoalBox/>
         <GoalBox/>
         <GoalBox/>
         <GoalBox/>
      </HorizontalScroll>

    </View>
  )
}

export default Body