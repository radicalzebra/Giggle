import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { PlusIcon } from 'react-native-heroicons/mini'
import { OverlayActions } from '../store/OverlaySlice'
import { useDispatch } from 'react-redux'


export default function AddButton({setTouch}) {

  const dispatch = useDispatch()
  
  const onPressHandler = () => {
    dispatch(OverlayActions.showOverlay(true))
    setTouch(false)
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressHandler} className="bg-gray-300 absolute w-16 h-16 scale-90 top-0 -right-24 rounded-full items-center justify-center">
         <PlusIcon size={25} color={"black"}/>
    </TouchableOpacity>
  )
}