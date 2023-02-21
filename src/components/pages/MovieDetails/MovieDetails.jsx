import { useState, useEffect } from 'react';

import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { getMovieId } from 'components/helpers/getApi';
import styles from './moviedetalis.module.scss';

const MovieDetails = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    item: {},
  });

  // const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  console.log(location);
  const { movieId } = useParams();
  useEffect(() => {
    console.log('use');

    const fetchTraiding = async () => {
      setState(prev => ({ ...prev, loading: true }));

      try {
        const results = await getMovieId(movieId);

        setState(prev => {
          return { ...prev, item: { ...results } };
        });

        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTraiding();
  }, [movieId]);

  // const backPage = () => {
  //   navigate(from);
  // };
  // const cssContainer = `container  ${styles.container}`;
  const { original_title, overview, poster_path, backdrop_path } = state.item;
  return (
    <>
      <div className={styles.wrap}>
        <div className={`container  ${styles.container}`}>
          {/* <div>
            <button onClick={backPage}>back</button>
          </div> */}

          <div className={styles.team}>
            <img
              className={styles.img}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
              width="350"
            />
          </div>

          <div className={styles.title}>
            <h2> {original_title}</h2>
            {overview}

            <div className={styles.nav}>
              <NavLink className={styles.link} state={{ from }} to="cast">
                CAST
              </NavLink>
              <NavLink className={styles.link} state={{ from }} to="reviews">
                reviews
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={styles.cover}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
          }}
        ></div>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
