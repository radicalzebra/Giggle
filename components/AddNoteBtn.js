import { View, Text , Pressable} from 'react-native'
import React from 'react'
import { ClipboardDocumentListIcon, PlusCircleIcon , PlusIcon } from 'react-native-heroicons/outline'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { NoteActions } from '../store/NoteSlice'

export default function AddNoteBtn() {

   const dispatch = useDispatch()

   const onPressHandler = () => {
      dispatch(NoteActions.pushNotes())
   }

   return (
    <View className="bg-red-90 p-5 scale-90 h-full w-screen">

    <Pressable className={`bg-blue-90 h-full w-full`} onPress={onPressHandler}>
         {/* backlay */}
         <View className={`bg-gray-20 p-3 rounded-xl border-black border-2 absolute top-2 left-1 -z-1  w-full h-full bg-black`}>
            <Text numberOfLines={20}  ellipsizeMode="tail" className="w-full text-lg ">.</Text>
         </View>

         <View className={`bg-gray-50 p-3 px-5  rounded-xl border-black border-2  h-full justify-center items-center relative pb-8 `}>
             <PlusIcon color={"black"} size={80}/>
         </View>

     </Pressable>
   </View>
  )
}