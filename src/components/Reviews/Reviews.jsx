import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'components/helpers/getApi';

const Reviews = () => {
  const [items, setItems] = useState([]);
  // const [id, setId] = useState('')
  const { movieId } = useParams();
  // console.log(id)
  useEffect(() => {
    if (!movieId) return;
    async function getCredits() {
      try {
        const { results } = await getMovieReviews(movieId);
        setItems([...results]);
        console.log(results);
      } catch (error) {}
    }

    getCredits();
  }, [movieId]);

  const element = items.map(
    ({ author, content, created_at, author_details }) => {
      const url = `https://www.themoviedb.org/u/${author_details.username}`;

      return (
        <li>
          <p>
            Написано
            <a href={url} target="_blank" rel="noreferrer">
              {author}
            </a>
            {new Date(created_at).toLocaleString()}
          </p>
          <span>{content}</span>
        </li>
      );
    }
  );

  return (
    <>
      <h3>Reviews</h3>
      {element}
    </>
  );
};
export default Reviews;
