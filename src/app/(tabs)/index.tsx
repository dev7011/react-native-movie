import {View, StyleSheet, Image, Text, FlatList} from "react-native";
import {useRouter} from "expo-router";
import SearchBar from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import MovieList from "@/components/MovieList";
import ThemedLoader from "@/components/ThemedLoader";
import ThemedScrollView from "@/components/ThemedScrollView";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  function handleSearch(){
    router.push("/search");
  }

  const MovieSection = () => {
    if (moviesError) {
      return (<Text style= {styles.text}> Error: {moviesError?.message} </Text>)
    }

    return (
      <View className= "flex-1 mt-5">
        <Text className="text-lg text-white font-bold mt-5 mb-3">
          Latest Movies
        </Text>
        <MovieList movies = {movies}/>
      </View>
    )
  }

  return (
    <ThemedScrollView>
      <SearchBar
        placeholder= "search ..."
        value= ""
        handleSearch = { handleSearch }
      />

      { moviesLoading
        ? <ThemedLoader />
        : <MovieSection />
      }
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  }
});
