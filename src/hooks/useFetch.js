import { useState, useEffect } from 'react';
// paasing the apiPath from the current route
export const useFetch = (apiPath, queryTerm = '') => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   modified url from the apiPath passed
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_TILA}&query=${queryTerm}`;
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      // passing the new apiPath for the route we are calling
      const res = await fetch(url);
      const json = await res.json();

      setIsLoading(false);

      // the setMovies state now hold the results from the api call
      const data = json.results;
      setMovies(data);
      console.log(data);
    };
    fetchMovies();
  }, [url]);

  // retrun the proccessed movies data for the current route
  return { movies, isLoading };
};
