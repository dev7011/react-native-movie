import React from 'react'

import {Image, ScrollView, View, ViewProps} from "react-native";
import {images} from "@/constants/images";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons} from "@/constants/icons";

const ThemedScrollView = ({children, style, ...props}: ViewProps) => {
  return (
    <View className= "flex-1 bg-primary">
      <Image source={images.bg} className= "absolute w-full bg-primary-400 z-0"/>
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}
        >
          <Image
            source={icons.logo}
            className= "w-12 h-10 mt-10 mb-5 mx-auto"
            resizeMode="cover"
          />

          {children}

        </ScrollView>
    </View>
  )
}

export default ThemedScrollView