import { View, Text,Image,TextInput, ActivityIndicator, ScrollView} from 'react-native'
import Header from "../screens/Header"
import ItemsHighLight from '../components/ItemsHighLight'






export default function HomeScreen() {

   return ( 
      <Header>
         <ItemsHighLight/> 
      </Header>
   )
  
}