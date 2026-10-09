import {View, StyleSheet, Text, FlatList} from "react-native"
import {useRouter} from "expo-router"
import SearchBar from "@/components/SearchBar"
import useFetch from "@/services/useFetch"
import {fetchMovies} from "@/services/api"
import ThemedLoader from "@/components/ThemedLoader"
import ThemedScrollView from "@/components/ThemedScrollView"
import {getTrendingMovie} from "@/services/appwrite";
import MovieCard from "@/components/MovieCard";
import React from "react";
import TrendingCard from "@/components/TrendingCard";

export default function Index() {
  const router = useRouter()

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }))

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovie)


  const MovieSection = () => {
    if (moviesError) {
      return (<Text style= {styles.text}> Error: {moviesError?.message} </Text>)
    }

    return (
      <View className= "flex-1 mt-5">
        <Text className="text-lg text-white font-bold mt-5 mb-3">
          Latest Movies
        </Text>
        <FlatList
          data={movies}

          renderItem={({ item }) => (
            <MovieCard {...item}/>
          )}

          keyExtractor={(item) => item.id.toString()}

          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 5,
          }}
          className="mt-2 pb-5"
          scrollEnabled={false}
        />
      </View>
    )
  }

  const TrendingMovieSection = () => {
    if (!trendingMovies?.length) {
      return null;
    }

    if (moviesError) {
      return (<Text style= {styles.text}> Error: {moviesError?.message} </Text>)
    }

    return (
      <>
        <Text className="text-lg text-white font-bold mt-5 mb-3">
          Trending movie list
        </Text>

        <FlatList
          data={trendingMovies}

          renderItem={({ item, index }) => (
            <TrendingCard movie={item} index={index} />
          )}

          keyExtractor={(item) => item.movie_id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 5,
          }}
          className="mt-2 pb-5"
          scrollEnabled={false}
        />
      </>
    )
  }

  return (
    <ThemedScrollView>
      <SearchBar
        placeholder= "search ..."
        value= ""
        handleSearch = { () =>  router.push("/search") }
      />


      { (moviesLoading || trendingLoading)
        ? <ThemedLoader />
        : <>
          <TrendingMovieSection />
          <MovieSection />
          </>
      }
    </ThemedScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  }
})
