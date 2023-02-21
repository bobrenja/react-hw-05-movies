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

  // '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
  // '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
  // '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
  // /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
  // /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
};

export default UseRoutes;
