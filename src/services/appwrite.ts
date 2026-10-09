import { Client, TablesDB, ID, Query } from "react-native-appwrite";

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;
const END_POINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const PLATFORM = process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!;




const client = new Client()
  .setEndpoint(END_POINT)
  .setProject(PROJECT_ID)
  .setPlatform(PLATFORM);

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (
    query: string,
    movie: Movie
  ) => {

  try {

    // search query in listRow
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [
        Query.equal("searchTerm", query)
      ]
    })

    // check if a record of this search has ready been
    // if value is found, increase the count by 1
    // if the value is not found, create a new row with count of 1
    if (result.rows.length > 0) {
      const existingMovie = result.rows[0]

      await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: existingMovie.$id,
        data: {
          count: existingMovie.count + 1
        }
      })
    } else {
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: {
          searchTerm: query,
          movie_id: movie.id,
          title: movie.title,
          count: 1,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
      })
    }
  } catch (error) {
    console.error("Error updating search count:", error)
    throw error
  }
}

export const getTrendingMovie = async (): Promise<TrendingMovie[]> => {
  try {
    // search query in listRow
    const result = await tablesDB.listRows({
      databaseId: DATABASE_ID,
      tableId: TABLE_ID,
      queries: [
        Query.limit(5),
        Query.orderDesc("count")
      ]
    })

    return result.rows as unknown as TrendingMovie[];
  } catch (error) {
    console.error("Error updating search count:", error)
    throw error
  }
}