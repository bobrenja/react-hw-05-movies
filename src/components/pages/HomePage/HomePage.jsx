import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'components/helpers/getApi';
import styles from './home-page.module.scss';

const HomePage = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    items: [],
  });

  useEffect(() => {
    const fetchTraiding = async () => {
      setState(prev => ({ ...prev, loading: true }));

      try {
        const { results } = await getTrending();

        setState(prev => {
          return { ...prev, items: [...prev.items, ...results] };
        });
      } catch (error) {}
    };
    fetchTraiding();
  }, [setState]);

  const location = useLocation();
  console.log(state.items);
  const element = state.items.map(
    ({ id, title, poster_path, overview, vote_average }, index) => {
      const img = `https://image.tmdb.org/t/p/w200${poster_path}`;
      return (
        <li key={index} className={styles.item}>
          <Link
            className={styles.link}
            state={{ from: location }}
            to={`/movies/${id}`}
          >
            <img className={styles.img} src={img} alt={title} />

            <p className={styles.title}> {title}</p>
            <div className={styles.info}>
              <h3 className={styles.info_title}>{title}</h3>
              <p className={styles.info_pretitle}> {overview}</p>
            </div>
            <span className={styles.vote}>{vote_average.toFixed(1)}</span>
          </Link>
        </li>
      );
    }
  );

  return (
    <section>
      <div>
        <ul className={styles.list}>{element}</ul>
      </div>
    </section>
  );
};

export default HomePage;
