import { useState, useEffect } from 'react';
// paasing the apiPath from the current route
export const useFetch = (apiPath, queryTerm = '') => {
  const [movies, setMovies] = useState([]);
  //   modified url from the apiPath passed
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_TILA}&query=${queryTerm}`;
  useEffect(() => {
    const fetchMovies = async () => {
      // passing the new apiPath for the route we are calling
      const res = await fetch(url);
      const json = await res.json();
      // the setMovies state now hold the results from the api call
      const approved = json.results;
      setMovies(approved);
      console.log(approved);
    };
    fetchMovies();
  }, [url]);

  // retrun the proccessed movies data for the current route
  return { movies };
};
