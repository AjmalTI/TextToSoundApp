import React from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,TextInput,Alert} from 'react-native'
import {Header} from 'react-native-elements'
import db from './localDb'
import SoundButton from './components/PhonicSoundButton'


export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text:"",
      chunks:[],
      phonicSounds:[]
    }
    
  }
render(){
 
return(
<View>
 
 
<Header backgroundColor="brown"
 centerComponent={{
  text:"Gotham City",
  style:{color:"White",fontSize:20},
}}></Header>
 
<Image style={styles.img}
source={{
  uri:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7117/batman-head-clipart-md.png"
}}
/>
 
 <TextInput
 style={styles.inputBox}
 onChangeText={text=>{
   this.setState({text:text})
 }}
 value={this.state.text}
 />

<TouchableOpacity  style={styles.btn}
onPress={
  ()=> {var word = this.state.text.toLowerCase()
  db[word]?
  (this.setState({chunks:db[word].chunks}),this.setState({phonicSounds:db[word].phones})):
  Alert.alert("I'm Batman....") }
   }  >
<Text style={styles.txt}>Click Me</Text>
 
</TouchableOpacity>
 <View>
 {this.state.chunks.map((item,index)=>{
   return(
     <SoundButton
     wordChunk={this.state.chunks[index]}
     soundChunk = {this.state.phonicSounds[index]}/>
   )
 })}
 </View>
</View>
)
}
}
 
const styles =StyleSheet.create({
img:{marginTop:50,
width:110,
height:150,
alignSelf:"center"},
btn:{
  backgroundColor:"black",
  height:50,
  width:150,
  alignSelf:"center",
  },
  txt:{color:"white",
  alignSelf:"center",
  paddingTop:15, 
  },
  inputBox:{
    marginTop:20,
    width:200,
    height:50,
    borderWidth:3,
    outline:"none",
    alignSelf:"center",
    textAlign:"center",
    borderColor:"blue",
    marginBottom:20
  }
})