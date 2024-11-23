import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Style'; 

export default function Message({ you, atlas }) {
  return (
    <View style={styles.message}>
      <Text style={{'color': '#201E43', 'fontSize' : 15,}} > {you}</Text>
      <Text style={{'color': '#6439FF', 'fontSize' : 16 , fontStyle : 'italic'}} > {atlas}{'\n'}</Text>
      <View style={{ "borderWidth" : 0.2, 'borderColor' : '#CBDCEB'  }}></View>
    </View>
  );
}
