import React from 'react'
import{Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {Audio} from 'expo-av'

export default class SoundButton extends React.Component{
  playSound = async soundChunk =>{
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3'

    await Audio.Sound.createAsync({
      uri:soundLink
    },
    {
      shouldPlay:true
    })
  }


  render(){
    return(
      <View>
      <TouchableOpacity style={styles.inputBox2} onPress={()=>{
      this.playSound(this.props.soundChunk)
        }  }>
      <Text style={styles.txt}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
      </View>

    )
  }
}

const styles =StyleSheet.create({
  inputBox2:{

    borderColor:"black",
    width:200,
    height:50,
    borderWidth:3,
    outline:"none",
    alignSelf:"center",
    textAlign:"center",

  },
  txt:{
        backgroundColor:"red",
  }
})