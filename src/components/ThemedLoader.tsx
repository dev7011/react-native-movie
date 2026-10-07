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
        className="mt-10 self-center"
        style= {style}
      />
  )
}

export default ThemedLoader