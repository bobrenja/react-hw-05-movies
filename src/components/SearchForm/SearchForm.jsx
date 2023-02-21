import { useState } from 'react';

import styles from './searchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  // console.log(onSubmit)
  const [state, setState] = useState('');

  const handleChange = ({ target }) => {
    console.log(target.value);
    setState(target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(state);
    setState('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={state} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
