import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home">
      <div className="home__icon">
        <FontAwesomeIcon icon={faSun} />
      </div>
      <div className="home__title">find out the temperature and more...</div>
    </div>
  );
};

export default Home;
