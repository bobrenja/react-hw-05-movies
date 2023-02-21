import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { getSearchMovie } from 'components/helpers/getApi';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] =useSearchParams();
  const search = searchParams.get('search')

  useEffect(() => {
    if (!searchParams) return;

    async function getSearch() {
      try {
        const { results } = await getSearchMovie(search);
        setItems([...results]);
        // console.log(results)
        // setQuery('');
      } catch (error) {
        console.log(error);
      }
    }
    getSearch();
  }, [search, searchParams]);

  const handleSubmit = q => {
    // setQuery(q);
    setSearchParams({search: q})
    // console.log('query', q);
  };



  const element = items.map(({ id, title }, index) => (
    <li key={index}>
      {/* <Link to="/movies/{id}"> */}
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      <h2>Movies</h2>
      <SearchForm onSubmit={handleSubmit} />
      <ol>{element}</ol>

    </>
  );
};

export default Movies;
