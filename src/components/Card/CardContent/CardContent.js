import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { icons } from '../../../helpers/icons';

const CardContent = ({ icon, temperature, description, wind, humidity }) => {
  return (
    <section className="content">
      <div className="content__section">
        <span className="content__icon">
          <FontAwesomeIcon icon={icons[icon]} />
        </span>
        <div>
          <p className="content__temperature">{Math.floor(temperature)} &#176;</p>
          <p className="content__description">{description}</p>
          <div className="content__hr" />

          <p className="content__wind">Wind: {Math.floor(wind)} m/s</p>
          <p className="content__humidity">Humidity: {Math.floor(humidity)}&#x25;</p>
        </div>
      </div>
    </section>
  );
};

CardContent.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  wind: PropTypes.number,
  humidity: PropTypes.number,
  temperature: PropTypes.number,
};

CardContent.defaultProps = {
  description: '',
  icon: '01d',
  wind: null,
  humidity: null,
  temperature: null,
};

export default CardContent;
