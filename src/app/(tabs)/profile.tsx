import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaScreen}  from "@/constants/themens";

const Profile = () => {
  return (
    <View style = {SafeAreaScreen}>
      <Text className= "text-red-500 text-2xl">Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})