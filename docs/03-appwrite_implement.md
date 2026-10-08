♦️Get starting
npx expo install react-native-appwrite

services/
└── appwrite_with_database.ts


♦️Database/tablesDB

    import { Client, Databases, TablesDB, ID, Query } from "react-native-appwrite";

    const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!
    const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
    const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
    
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(PROJECT_ID);
    
    const database = new Databases(client);
    const tablesDB = new TablesDB(client)
    
    export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.equal("searchTerm", query),
    ]);
    
        if (result.documents.length > 0) {
          const existingMovie = result.documents[0];
          await database.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            existingMovie.$id,
            {
              count: existingMovie.count + 1,
            }
          );
        } else {
          await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
            searchTerm: query,
            movie_id: movie.id,
            title: movie.title,
            count: 1,
            poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          });
        }
    } catch (error) {
    console.error("Error updating search count:", error);
    throw error;
    }
    };

♦️Database vs. TablesDB
  
  DocumentsDB              TablesDB
  ────────────────────────────────────
  Databases                 TablesDB
  Collection                Table
  Document                  Row
  
  listDocuments()          listRows()
  getDocument()            getRow()
  createDocument()         createRow()
  updateDocument()         updateRow()
  deleteDocument()         deleteRow()
  
  response.documents        response.rows
  COLLECTION_ID             TABLE_ID
  

♦️.ENV

  EXPO_PUBLIC_MOVIE_API_KEY= 
  EXPO_PUBLIC_APPWRITE_PROJECT_ID= 
  EXPO_PUBLIC_APPWRITE_DATABASE_ID=
  EXPO_PUBLIC_APPWRITE_TABLE_ID= z.B books/ movies
  EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
  EXPO_PUBLIC_APPWRITE_PLATFORM=dev70.sheflie