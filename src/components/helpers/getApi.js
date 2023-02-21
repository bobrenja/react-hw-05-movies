import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

const instans = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: REACT_APP_API_KEY,
    language: 'en-US',
  },
});

// const {data} = instans.get("trending/get-trending")

export const getTrending = async () => {
  const { data } = await instans.get('/trending/movie/day', {
    params: {
      language: 'uk-UA',
    },
  });
  return data;
};

export const getMovieId = async id => {
  const { data } = await instans.get(`/movie/${id}`);
  return data;
};

export const getSearchMovie = async (query, page = 1) => {
  const { data } = await instans.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = await instans.get(`movie/${movie_id}/credits`);
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await instans.get(`movie/${movie_id}/reviews`);
  return data;
};
