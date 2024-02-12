import { View, TextInput, Modal,Pressable} from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import OverlayNoteButton from './OverlayNoteButton';


export default function SaveGroupModal() {

   const [group, setGroup] = useState("")

   const onChangehandler = (text) => {
     if(text.length <= 21) setGroup(text)
   }


  return (
         <View className={"bg-gray-30 rounded-xl w-full flex-row justify-between px-8 items-center scale-80"}>

            <TextInput
               value={group}
               onChangeText={(text) => onChangehandler(text)}
               className="bg-white h-12 rounded-full flex-1 p-4 font-medium border-2 border-gray-900"
               placeholder='Name your note (optional)'
               placeholderTextColor={"gray"}
               selectionColor={'black'}
            />

            
            {/* <OverlayNoteButton text={"Save"} save={true}/>    */}
          
         </View>
  )
}