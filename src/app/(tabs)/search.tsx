import {FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import ThemedScrollView from "@/components/ThemedScrollView";
import SearchBar from "@/components/SearchBar";
import ThemedText from "@/components/ThemedText";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import ThemedLoader from "@/components/ThemedLoader";
import MovieCard from "@/components/MovieCard";
import {updateSearchCount} from "@/services/appwrite";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const {
    data: movies,
    loading,
    error,
    refetch: loadSearchMovie,
    reset
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeOut = setTimeout( async () => {
       if (searchQuery.trim().length > 0) {
         await loadSearchMovie();

         if (movies?.length) {
           await updateSearchCount(searchQuery, movies[0])
         }
       }
       else {
         reset()
       }
    }, 500)

    return () => clearTimeout(timeOut)
  }, [searchQuery]);

  return (
    <ThemedScrollView>
      <SearchBar
        placeholder="Search input ..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
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
          marginBottom: 10,
        }}

        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-10 px-5">
              <Text className="text-center text-red-500">
                {searchQuery.trim()
                  ? "No movies found"
                  : "Start typing to search for movies"}
              </Text>
            </View>
          ) : null
        }

        ListHeaderComponent={
          <>
          <View className="flex-row w-full mt-2">
            <ThemedText>Result search of {searchQuery}</ThemedText>
          </View>

          <View className="flex-1 mt-5">
            { (movies?.length! > 0) &&
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
            }
            {loading && <ThemedLoader />}
            {error && <ThemedText>Error by load movies: {error.message}</ThemedText>}
          </View>
          </>
        }
        scrollEnabled={false}
        className="mt-2 pb-32"
      />
    </ThemedScrollView>
  );
}
export default Search
