import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  ScrollView,
  SafeAreaView,
 } from 'react-native';
import {
  ReactNode,
  ReactElement,
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

  const WidthHeight = () => (
    <View style={layoutStyles.container1}>
        <Text>100% x 20%</Text>
    </View>
  )

  const OuterBox = ({children}) => (
    <View style={layoutStyles.container3}>
      {children}
    </View>
  )

  const InnerBox = () => (
    <View style={layoutStyles.container2}>
      <Text>MarginとPaddingをチェック</Text>
    </View>
  )

  const Flexbox = () => (
    <View style={layoutStyles.container4}>
      <Text style={layoutStyles.item}>Item 1</Text>
      <Text style={layoutStyles.item}>Item 2</Text>
      <Text style={layoutStyles.item}>Item 3</Text>
      <Text style={layoutStyles.item}>Item 4</Text>
      <Text style={layoutStyles.item}>Item 5</Text>
      <Text style={layoutStyles.item}>Item 6</Text>
    </View>
  )

  const HorizontalScroll = () => (
    <ScrollView 
      horizontal={true} // ★水平スクロールを有効にする
      showsHorizontalScrollIndicator={true} // スクロールバーを表示するか
      contentContainerStyle={layoutStyles.scrollViewContent}
    > 
      <View style={layoutStyles.flexScrollHorizontal}>
        {[...Array(10).map((_, i) => (
          <Text key={i} style={layoutStyles.scrollItem}>
              Item {i + 1}
          </Text>
        ))]} 
      </View>
    </ScrollView>
  )

  const layoutStyles = {
    container1: {
      width: '100%',
      height: '20%',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#bbb',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      // margin: 72,
      marginVertical: 40,
      marginHorizontal: 30,
      padding: 16,
      borderWidth: StyleSheet.hairlineWidth,
      backgroundColor: '#ff2',
    },
    container3: {
      backgroundColor: '#f2f',
    },
    container4: {
      // diplay: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // overflow: 'x-scroll',
    },
    item: {
      width: 100,
      height: 100,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#bbb',
    },
    scrollViewContent: {
      widht: '100%',
      height: '40%',
      // alignItems: 'center'
    }, 
    flexScrollHorizontal: {
      flexDirection: 'row', // 子要素を横並びにする
      // flexWrapは指定しない (スクロールさせるため)
      backgroundColor: '#e0f7fa',
      padding: 10,
      borderWidth: 1,
      borderColor: '#00796b',
    },
    scrollItem: {
      width: 100,
      height: 100,
      backgroundColor: '#ff9',
      borderWidth: 1,
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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

      <WidthHeight />

      <OuterBox>
        <InnerBox />
      </OuterBox>

      <Flexbox />

      {/* <HorizontalScroll /> */}

      <View style={styles.button}>

      </View>
  
      <StatusBar style="auto" />
    </SafeAreaView>
    
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
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    right: 32,
    bottom: 64,
  }

});