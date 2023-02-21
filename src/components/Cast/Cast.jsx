import { useState, useEffect } from 'react';
import { getMovieCredits } from 'components/helpers/getApi';
import { useParams } from 'react-router-dom';
import styles from './cast.module.scss';

const Cast = () => {
  const [items, setItems] = useState([]);
  // const [id, setId] = useState('')
  const { movieId } = useParams();
  // console.log(id)
  useEffect(() => {
    if (!movieId) return;
    async function getCredits() {
      try {
        const { cast } = await getMovieCredits(movieId);
        setItems(cast);
        console.log(cast);
      } catch (error) {}
    }

    getCredits();
  }, [movieId]);

  //   const {name, popularity} = item
  const element = items.map(({ name, popularity, profile_path }) => {
    const img = `https://image.tmdb.org/t/p/w200/${profile_path}`;
    return (
      <li key={name} className={styles.list}>
        <img src={img} alt={name} width="150" />
        <p>{name}</p>
      </li>
    );
  });
  return (
    <>
      <h3>Cast</h3>
      <ul className={styles.item}> {element}</ul>
    </>
  );
};
export default Cast;
