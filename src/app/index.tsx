import { Text, View, Image, StyleSheet } from "react-native";
import "@/global.css"
import {images} from "@/constants/images";

export default function Index() {
  return (
    <View className= "bg-primary flex-1 w-full">
      <Image source={images.bg}></Image>
    </View>
  );
}

const styles = StyleSheet.create({});
