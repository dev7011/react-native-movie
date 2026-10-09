import {Pressable, Text, View} from 'react-native'
import React from 'react'
import {Link, useLocalSearchParams, useRouter} from "expo-router";

const Details = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  return (
    <View className= "flex-1 justify-center items-center">
      <Text>Details Post: {id}</Text>
      <Pressable
        className="bg-blue-500 px-4 py-2 rounded-lg mt-4"
        onPress={() => router.back()}>
        <Text className="text-white font-bold"> go back</Text>
      </Pressable>
    </View>
  )
}

export default Details
