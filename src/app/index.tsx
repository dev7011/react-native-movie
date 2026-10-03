import { Text, View, Image, StyleSheet } from "react-native";
import "@/global.css"
import {icons} from "@/src/constants/icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={icons.logo}></Image>
      <Text > TEST </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
