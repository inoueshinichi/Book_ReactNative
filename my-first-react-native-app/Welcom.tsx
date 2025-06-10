import React from 'react'
import {
    Text,
    StyleSheet,
    Platform,
} from 'react-native'

export function Welcome(
  {name}
  : { name: string }
) {
  return <Text style={styles.text}
    >Hello, {name}!!</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.select({
            ios: "Hiragino Mincho ProN",
            android: "seriff",
        }),
        fontSize: 48,
    }
})