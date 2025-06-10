import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
 } from 'react-native';
import {
  useState,
  useEffect,
} from 'react'

import { Welcome } from './Welcom';
import { Clock, ClockWithCustomHooks } from './Clock'

export default function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   alert('TinyTank!')
  // })

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}

      {/* <Welcome name="Tiny" />
      <Welcome name="Tank" />
      <Welcome name="Inoue" />
      <Welcome name="Shinichi" /> */}

      {/* <Button title="-1" onPress={() => setCount(count - 1)} />
      <Text>{count}</Text>
      <Button title="+1" onPress={() => setCount(count + 1)} /> */}

      {/* <Clock /> */}
      {/* <ClockWithCustomHooks /> */}
      
      {/* <Text style={styles.bigGray}>TinyTank</Text>
      <Text style={styles.black}>TinyTank</Text>
      <Text style={[styles.bigGray, styles.black]}>TinyTank</Text>
      <Text style={[styles.black, styles.bigGray]}>TinyTank</Text> */}

      
      <Text>
        この文章の中で
        <Text style={{ textDecorationLine: 'underline'}}>この部分だけは下線付き</Text>
        です
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  black: {
    color: '#000000',
  },

  bigGray: {
    color: '#888888',
    fontSize: 24,
  },

  textDecoration: {
    textDecorationLine: 'underline'
  },

  text: {
    width: 300, // Android: 300dp, iOS: 300pt
    fontSize: 24, // Android: 24sp, iOS: 24pt
  },

  view: {
    transform: [
      { rotateX: '45deg' }, // X軸を45°回す
      { rotateZ: '0.785398rad' }, // Z軸を0.785398ラジアン回す
      { skewX: '125deg' }, // X軸方向に125°傾斜する
    ]
  },

});