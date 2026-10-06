import {View, StyleSheet, Image, ScrollView} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {useRouter} from "expo-router";
import SearchBar from "@/components/search_bar";

export default function Index() {
  const router = useRouter();

  function handleSearch(){
    // @ts-ignore
    router.push("/search");
  }

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
          className= "w-12 h-10 mt-20 mb-5 mx-auto"
          resizeMode="cover"
        />

        <View className= "flex-1 mt-5">
          <SearchBar
            placeholder= "search ..."
            value= ""
            handleSearch = { handleSearch }
          />
        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
