import { View, Text, ScrollView,KeyboardAvoidingView , Platform, TextInput} from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import OverlayNoteButton from './OverlayNoteButton'
import SaveGroupModal from './SaveGroupModal'



export default function CreateNoteScroller({children}) {
  return (
      <KeyboardAvoidingView behavior="position" className="h-4/6 bg-red-90 relative">
        
         <SaveGroupModal/>

         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="bg-blue-90 ">
            {children}
         </ScrollView>

         <View className="flex-row  justify-center">
            <OverlayNoteButton text={"Apply"}/>
         </View>

      </KeyboardAvoidingView>
  )
}

