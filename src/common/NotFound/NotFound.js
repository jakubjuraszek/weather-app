import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="not-found">
      <FontAwesomeIcon icon={faSadTear} />
      <h3 className="not-found__title">City not found...</h3>
    </div>
  );
};

export default NotFound;
