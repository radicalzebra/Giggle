import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import React , {useState} from 'react'
import { DocumentPlusIcon } from 'react-native-heroicons/outline'

export default function CreateNote({num}) {

   const [heading,setHeading] = useState("")
   const [Description,setDescription] = useState("")

   const onChangeHeading = (text) => {
      // console.log(text.length)
     if(text.length <= 25) setHeading(text)
   }

   const onChangeDescription = (text) => {
   //   console.log(text.length)
     if(text.length <= 300) setDescription(text)
   }

   return (
      <View className="bg-red-90 p-5 scale-90 h-full w-screen">
            <Pressable className={`bg-blue-90 h-full w-full `} > 
                  
                  {/* backlay */}
                  <View className={`bg-gray-20 p-3 rounded-xl border-black border-2 absolute top-2 left-1 -z-1  w-full h-full bg-gray-900 `}>
                     <Text numberOfLines={20}  ellipsizeMode="tail" className="w-full text-lg ">.</Text>
                  </View>

                  <View className={`bg-gray-50 p-3 px-5  rounded-xl border-black border-2  h-full  relative  `}>

                     <View className="bg-red-90 justify-center items-center">
                        <Text className="bg-red-90  text-xl text-center font-semibold w-8 h-8 border-2 rounded-full mb-4 bg-black text-white">{num}</Text> 
                     </View>

                     <TextInput
                     value={heading}
                     onChangeText={(text) => onChangeHeading(text)}
                     className="text-base font-bold mb-4 max-w-full  bg-gray-100 text-black  rounded-full p-2 pl-2 pr-2  " 
                     placeholderTextColor="gray"  
                     placeholder='Enter Heading'
                     selectionColor={'black'}
                     />

                     <TextInput 
                     value={Description}
                     onChangeText={(text) => onChangeDescription(text)}
                     className={`text-lg w-full font-medium bg-gray-100 rounded-xl h-4/6 p-2 `}
                     placeholder='Description'
                     placeholderTextColor="gray"  
                     style={{textAlignVertical:"top"}}
                     multiline={true}
                     numberOfLines={15}
                     selectionColor={'black'}
                     />

                  </View>

            </Pressable>
      </View>
  )
}