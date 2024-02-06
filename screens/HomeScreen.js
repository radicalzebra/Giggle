import { View, Text,Animated} from 'react-native'
import Header from './Header'
import GoalBox from '../components/GoalBox'
import VerticalScroll from '../components/VericalScroll'
import { useRef } from 'react'




export default function HomeScreen() {

 
  


   return ( 
      <View className="overflow-visible">
         <VerticalScroll>

         <Header/>
         {/* <CreateButton/> */}
         {/* <Quote/> */}

         
       

         <View  className="items-center bg-gray-20 p-2 px-7 mt-2" >
            <Text className="text-md font-medium">Some are born great, some achieve greatness, and some have greatness thrust upon them</Text>
            <Text className="text-gray-400 font-semibold mt-2 ">~ shakespeare</Text>
         </View>

      
        <View className="mt-4">

            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
            <GoalBox/>
      
        </View>

         </VerticalScroll>
      </View>
   )
  
}