import "react-native-gesture-handler" // 1行目に入れる

import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


function HomeScreen() {
  const nav = useNavigation()

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Home Screen</Text>
      <Button title="詳細へ" onPress={() => nav.navigate('Detail')} />
    </View>
  )
}

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Detail Screen</Text>
      </View>
  )
}

function Tab1Screen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Tab1 Screen</Text>
      </View>
  )
}

function Tab2Screen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Tab2 Screen</Text>
      </View>
  )
}

function Drawer1Screen() {
  const nav = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Drawer 1</Text>
      </View>
  )
}

function Drawer2Screen() {
  const nav = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Drawer 2</Text>
      </View>
  )
}


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* スタック形式画面遷移 */}
      {/* <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'ホーム' }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator> */}

      {/* タブ形式画面遷移 */}
      {/* <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1Screen} />
        <Tab.Screen name="Tab2" component={Tab2Screen} />
      </Tab.Navigator> */}

      {/* ドロワー形式画面遷移 */}
      <Drawer.Navigator>
        <Drawer.Screen name="Drawer1" component={Drawer1Screen} />
        <Drawer.Screen name="Drawer2" component={Drawer2Screen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


