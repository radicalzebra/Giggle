import { View, Text , Pressable, TouchableOpacity} from 'react-native'
import React ,{useState} from 'react'
import {PlusIcon} from "react-native-heroicons/outline"
import  * as Haptics from "expo-haptics"
import AddButton from './AddButton'
import ImportGroup from './ImportGroup'
import { UseSelector, useDispatch } from 'react-redux';
import { OverlayActions } from '../store/OverlaySlice'




// On Android, this module requires permission to control vibration on the device. The VIBRATE permission is added automatically.

export default function CreateButton() {

  const dispatch = useDispatch()
  
  const [touch,setTouch] = useState(false)
  const [longTouch,setLongTouch] = useState(false)

  const onLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    setLongTouch(prev => !prev)
  }

  const onPressHandler = () => {
    
    setTouch(true)
    setTimeout(()=>{
      dispatch(OverlayActions.showOverlay(true))
      setTouch(false)
    },10)
    setLongTouch(false)

  }

  return (
     <TouchableOpacity activeOpacity={0.9} onPress={onPressHandler} onLongPress={onLongPress}  className="relative bg-red-90 w-full h-full rounded-full ">
         <View className={`bg-black  absolute p-1  w-full h-full  flex-row items-center justify-center border-blac border-2 rounded-full top-1 ${touch && "top-0.5 "}`}>
            <PlusIcon color="black" fill="black" size={24} />
         </View>

         <View className={`bg-yellow-400  p-1  w-full h-full  flex-row items-center justify-center border-black border-2 rounded-full relative `}>
            <PlusIcon color="black" fill="black" size={33} />
         </View>

         {longTouch && <AddButton setTouch={setLongTouch}/>}
         {longTouch && <ImportGroup setTouch={setLongTouch}/>}
    </TouchableOpacity>
  )
}