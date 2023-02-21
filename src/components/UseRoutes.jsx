import { Routes, Route } from 'react-router-dom';
import Cast from './Cast/Cast';
import HomePage from './pages/HomePage/HomePage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Reviews from './Reviews/Reviews';

const UseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UseRoutes;
