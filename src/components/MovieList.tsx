import {FlatList} from 'react-native'
import React from 'react'
import MovieCard from "@/components/MovieCard";

const MovieList = ({ movies }: MovieListProps) => {
  return (
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
      className="mt-2 pb-32"
      scrollEnabled={false}
    />
  )
}

export default MovieList