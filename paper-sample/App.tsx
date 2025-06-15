import React from 'react'
import {
    Provider as PaperProvider
} from 'react-native-paper'
import { Main } from './src/Main'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  )
}

