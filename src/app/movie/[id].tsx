import {Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>Details Movie: {id}</Text>
    </View>
  )
}

export default Details
