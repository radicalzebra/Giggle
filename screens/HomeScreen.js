import { View, Text,Animated,ScrollView} from 'react-native'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import Overlay from '../components/Overlay'
import CreateNoteScroller from '../components/CreateNoteScroller'
import AddNoteBtn from '../components/AddNoteBtn'
import { useSelector } from 'react-redux'
import CreateNote from '../components/CreateNote'








export default function HomeScreen() {

   const notes = useSelector(state => state.note.notes)


   return ( 
         <View className="overflow-visible bg-blue-90 h-full relative">

            <Header/>
            <Body/>
            <Footer/>
            <Overlay>
               <CreateNoteScroller>
                  {notes.map((el,i) => <CreateNote key={i} num={el}/>)}
                  <AddNoteBtn/>
               </CreateNoteScroller>
            </Overlay>

         </View>
   )
  
}