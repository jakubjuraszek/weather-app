import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

const SearchInputContainer = () => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/${value}`);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <Input
          className="form__input"
          id="search"
          name="search"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="City..."
        />
        <Button className="form__button" btnType="primary" type="submit" icon={faSearch}>
          Search
        </Button>
      </form>
    </>
  );
};

export default SearchInputContainer;
