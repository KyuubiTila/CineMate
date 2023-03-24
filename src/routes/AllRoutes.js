import { Routes, Route } from 'react-router-dom';
import { MovieDetail, MovieList, PageNotFound, Search } from '../pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* path is the browser directory pointer for the element */}
        {/* element is the file the directory is pointing at */}
        <Route path="/" element={<MovieList />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/popular" element={<MovieList />} />
        <Route path="movies/top" element={<MovieList />} />
        <Route path="movies/upcoming" element={<Search />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
