import {View, StyleSheet, Image, ScrollView, Text, ActivityIndicator, FlatList} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {useRouter} from "expo-router";
import SearchBar from "@/components/search_bar";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";

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

  const MovieList = ()=>{
    return (
      <FlatList
        data={movies}

        renderItem={({ item }) => (
          <Text className="text-white text-sm">{item.title}</Text>
        )}

        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        className="mt-2 pb-32"
        scrollEnabled={false}
      />
    )
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
          <MovieList />
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

  // @ts-ignore
  return (
    <View className= "flex-1 bg-primary">
      <Image source={images.bg} className= "absolute w-full bg-primary-400 z-0"/>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}
      >
        <Logo />
        { moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              className="mt-10 self-center"
            />
          ) : (<MovieSection />)
        }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  }
});
