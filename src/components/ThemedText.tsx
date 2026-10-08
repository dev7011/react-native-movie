import React from 'react'
import {TextProps, Text, StyleSheet} from "react-native";

const ThemedText = ({children, style, ...props}: TextProps) => {
  return (
      <Text style= {[styles.text, style]} >
        {children}
      </Text>
  )
}

export default ThemedText

const styles = StyleSheet.create({
  text: {
    color: "white"
  }
})