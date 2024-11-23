import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableOpacity, 
         View,
         Vibration,
         ScrollView
          } from 'react-native';

import { io } from 'socket.io-client';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './Style';
import Message from './message';

export default function App() {
  const [inp, setInp] = useState("");
  const [items,setitems] = useState(["hola, Atlas 🌹."]);
  const [ws,setWs] = useState(null)
  const [sub,setSub] = useState(false);
  





// connecting with websocket
  useEffect(()=>{
    const socket = io("http://192.168.0.172:5000");

    setWs(socket)
    socket.on("connect",()=>{
      console.log("Coneected")
    })


    socket.on('message',(msg)=>{
      msg_(msg)
    })

    
  },[])


// for input buttoon
  const setit = () =>{
    Vibration.vibrate([40,10,50])
  }


// for gesture handler

const gesture = Gesture.Pan()
.onChange((e)=>ws.emit('volume',{vol : e.velocityX}))
  return (
    <GestureHandlerRootView style={styles.container}>
      
      <ScrollView 
        keyboardShouldPersistTaps="handled"
      
        style={styles.message_con}>
        {items.map((i,j) =>{
          return(
            <Message atlas={i} you={'owner'}></Message>
          )
        })}
      </ScrollView>
      <GestureDetector gesture={gesture} >
      <View style={styles.status_con}>
        <Text style={{'color' : '#73EC8B'}}>server : online   device : online</Text>
      </View>
      </GestureDetector>
      
      <View
       style={styles.input_div}
       >
        <TextInput
          style={styles.input}
          value={inp}
          placeholder='Call'
          onChangeText={e => setInp(e)}
          multiline = {true}
        />
        <TouchableOpacity
          style={styles.button}

          onLongPress={()=> { setit() }}
          
        >
          <Text style={styles.symbol} >↑</Text>
  
        </TouchableOpacity>
      </View>
      
      <StatusBar backgroundColor='#F7F9F2' style="auto" />
    </GestureHandlerRootView>
  );
}
