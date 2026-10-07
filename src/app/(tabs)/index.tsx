import {View, StyleSheet, Image, ScrollView, Text, ActivityIndicator, FlatList} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {useRouter} from "expo-router";
import SearchBar from "@/components/search_bar";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import MovieList from "@/components/MovieList";
import {SafeAreaView} from "react-native-safe-area-context";
import ThemedLoader from "@/components/ThemedLoader";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  function handleSearch(){
    // @ts-ignore
    router.push("/search");
  }

  const MovieSection = () => {
    if (moviesError) {
      return (<Text style= {styles.text}> Error: {moviesError?.message} </Text>)
    }

    return (
      <View className= "flex-1 mt-5">
        <SearchBar
          placeholder= "search ..."
          value= ""
          handleSearch = { handleSearch }
        />
        <>
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>
          <MovieList movies = {movies}/>
        </>
      </View>
    )
  }

  const Logo = () => {
    return (
      <Image
        source={icons.logo}
        className= "w-12 h-10 mt-20 mb-5 mx-auto"
        resizeMode="cover"
      />
    )
  }

  return (
    <View className= "flex-1 bg-primary">
      <Image source={images.bg} className= "absolute w-full bg-primary-400 z-0"/>
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}
      >
        <Logo />
        { moviesLoading
          ? <ThemedLoader />
          : <MovieSection />
        }

      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  }
});
