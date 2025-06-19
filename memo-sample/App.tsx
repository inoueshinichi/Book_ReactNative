import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper'
import { MainScreen } from './src/MainScreen'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native';

// メモ
import { MemoListScreen } from './src/MemoListScreen'
import { ComposeScreen } from './src/ComposeScreen'

// Paperコンポーネント
import { PaperTextScreen } from './src/PaperTextScreen'

// カスタムテーマの作成
const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#ffffff', // プライマリカラー
    background: '#000000', // 背景色
    surface: '#000000', // サーフェイスの色
    onSurface: '#ffffff', // サーフェイス上のテキスト・アイコンの色
  },
};


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={customDarkTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} options={{ title: "Application" }}></Stack.Screen>
          <Stack.Screen name="MemoList" component={MemoListScreen} options={{ title: "MemoList" }}></Stack.Screen>
          <Stack.Screen name="Compose" component={ComposeScreen} options={{ title: "Create Memo"}}></Stack.Screen>
          <Stack.Screen name="PaperText" component={PaperTextScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />  
    </PaperProvider>
  )
}

