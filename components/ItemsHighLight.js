import { View, Text } from 'react-native'
import HighlightProducts from '../components/HighlightProducts'
import HorizontalScroll from '../components/HorizontalScroll'


const ItemsHighLight = () => {
  return (
    <View className="mt-16 justify-start ">
         <Text className="text-xl font-semibold mb-4  ml-2 ">Items ↗</Text>
         <HorizontalScroll>
            <HighlightProducts/>
            <HighlightProducts/>
            <HighlightProducts/>
            <HighlightProducts/>
            <HighlightProducts/>
            <HighlightProducts/>
            <HighlightProducts/>
            <HighlightProducts end={true}/>
         </HorizontalScroll>
    </View>
  )
}

export default ItemsHighLight