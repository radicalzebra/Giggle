import { View, Text, Pressable, KeyboardAvoidingView,Modal,BackHandler } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon} from 'react-native-heroicons/outline'
import { OverlayActions } from '../store/OverlaySlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Overlay({children}) {

  const show = useSelector(state => state.overlay.show)
  const dispatch = useDispatch()


  const onPresshandler = () => {
     dispatch(OverlayActions.showOverlay(false))
  }

  const onModalPress = () => {
     dispatch(OverlayActions.showOverlay(false))
  }

  return (
      <Modal onPress={onModalPress} animationType={"slide"}  transparent={true} visible={show} className={`bg-gray-0 border border-gray-300 w-full rounded-xl`}>

         <View className="bg-red- h-full relative">

            <View className="h-full absolute top-16 border-2 border-gray-600 rounded-xl bg-gray-50">
               <Pressable onPress={onPresshandler} className={`flex-row justify-center bg-black w-6 h-6 items-center rounded-full  my-3 mb-11 mx-2 self-end`}>
                  <XMarkIcon color={"white"} size={20} />
               </Pressable>

               {children}
            </View>

         </View>

      </Modal>
  )
}