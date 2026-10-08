// Debounced search effect

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
          // Call updateSearchCount only if there are results
          if (movies?.length! > 0 && movies?.[0]) {
            await updateSearchCount(searchQuery, movies[0]);
          }
        } else {
          reset();
        }
      }, 500);
  
      return () => clearTimeout(timeoutId);
  }, [searchQuery]);