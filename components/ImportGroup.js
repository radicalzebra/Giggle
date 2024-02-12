import { View, Text, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowDownOnSquareIcon } from 'react-native-heroicons/outline'
import { OverlayActions } from '../store/OverlaySlice'
import { useDispatch } from 'react-redux'

export default function ImportGroup({setTouch}) {

  const dispatch  = useDispatch()
  const onPressHandler = () => {
     dispatch(OverlayActions.showOverlay(true))
     setTouch(false)
   }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressHandler} className="bg-gray-300 absolute w-16 h-16 scale-90 top-0 -left-24 rounded-full items-center justify-center">
        <ArrowDownOnSquareIcon size={25} color={"black"}/>
    </TouchableOpacity>
  )
}