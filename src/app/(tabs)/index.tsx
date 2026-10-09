import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className= "flex-1 bg-primary">
      <Image source={images.bg} className= "absolute w-full bg-primary-400 z-0"/>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}
      >
        <Image source={icons.logo} className= "w-12 h-10 mt-20 mb-5 mx-auto" resizeMode="cover"/>
        <>
          <Text style={styles.header}>
            Movie List
          </Text>
          <View>
            <Link href={{
                pathname: '/movie/[id]',
                params: {id: "avenger"}
              }
            }
              style={styles.text}>Avenger movie mit params</Link>
            <Link href="/movie/drama" style={styles.text}>Drama movie ohne </Link>
          </View>
        </>

        <>
          <Text style={styles.header}>
            Posts List: folder post v in (), href ohne /post
          </Text>
          <View>
            {
              Array.from( {length: 10} , (_, i) =>
                (
                  <Link  key={i} href={`/${i +1}`}>
                    <Text className="block flex-col flex-1 text-amber-700">Link zu Post id: {i}</Text>
                  </Link>
                )
              )}
          </View>
        </>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10

  },
  text: {
    color: "white",
  }
});
