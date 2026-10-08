import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import ThemedScrollView from "@/components/ThemedScrollView";
import SearchBar from "@/components/SearchBar";
import ThemedText from "@/components/ThemedText";
import MovieList from "@/components/MovieList";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import ThemedLoader from "@/components/ThemedLoader";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const {
    data: movies,
    loading,
    error,
    refetch: refreshMovie,
    reset
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeOut = setTimeout(async () => {
       if (searchQuery.trim().length > 0) {
         await refreshMovie()
       }
       else {
         reset()
       }
    }, 500)

    return () => clearTimeout(timeOut)
  }, [searchQuery]);

  const MovieSection = ({ movies }: MovieListProps) => {
    const hasMovies = Array.isArray(movies) && movies.length > 0;

    return (
      <>
        {hasMovies &&
            <View className="flex-row w-full mt-2">
              <ThemedText>Result search of {searchQuery}</ThemedText>
            </View>
        }

        <View className="flex-1 mt-5">
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Latest Movies
          </Text>
          {loading && <ThemedLoader />}
          {error && <ThemedText>Error by load movies: {error.message}</ThemedText>}

          {!loading && !error && hasMovies && <MovieList movies={movies} />}
        </View>
        </>
    );
  };

  return (
    <ThemedScrollView>
      <SearchBar
        placeholder="Search input ..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <MovieSection movies={movies} />
    </ThemedScrollView>
  );
}
export default Search
