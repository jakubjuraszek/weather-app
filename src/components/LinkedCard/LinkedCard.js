import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from '../../helpers/icons';

const LinkedCard = ({ city, country, temperature, icon }) => {
  return (
    <div className="linked-card">
      <h4 className="linked-card__title">
        {city}, {country}
      </h4>
      <div className="linked-card__section">
        <span className="linked-card__icon">
          <FontAwesomeIcon icon={icons[icon]} />
        </span>
        <p className="linked-card__temperature">{Math.floor(temperature)} &#176;</p>
      </div>
    </div>
  );
};

LinkedCard.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default LinkedCard;
