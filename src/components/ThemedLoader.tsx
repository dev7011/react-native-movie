import React from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native'

const ThemedLoader = ({style, ...props}: ActivityIndicatorProps) => {
  return (
    <ActivityIndicator
      size="large"
      color="#0000ff"
      className="mt-10 self-center bg-red-500 rounded-[100%]"
      style={style}
    />
  )
}

export default ThemedLoader