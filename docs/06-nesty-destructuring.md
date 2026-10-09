♦️ interface oder type

    interface TrendingCardProps {
      movie: TrendingMovie;
      index: number;
    }

    interface TrendingMovie {
      $id?: string;
      searchTerm: string;
      movie_id: number;
      title: string;
      count: number;
      poster_url: string;
    }

♦️Nested Object Destructuring)

    const TrendingCard = (
      { movie: { movie_id, title, poster_url },
        index
      }: TrendingCardProps
    ) => {
    
    }

    ♦️ step 1 destructuring TrendingCardProps
        { movie, index} = TrendingCardProps
        👉 d.h props
        {
          movie: {
            $id: "abc123",
            searchTerm: "Inception",
            movie_id: 123,
            title: "Inception",
            count: 5,
            poster_url: "https://example.com/poster.jpg"
          },
          index: 0
        }

    ♦️ step 2 inner destructuring movie { movie_id, title, poster_url } = movie
        
        📕 mit destructuring
            const TrendingCard = ({
                movie: { movie_id, title, poster_url },
                index,
              }: TrendingCardProps) => { 
                  console.log(movie_id)
            }

        📕 ohne destructuring
            const TrendingCard = ({
                movie,
                index,
              }: TrendingCardProps) => {
                  console.log(movie.movie_id)
            }