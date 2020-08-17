import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const CardHeader = ({ city, country, unixDate }) => {
  return (
    <div className="card-header">
      <h2 className="card-header__title">
        {city}, {country}
      </h2>
      <p className="card-header__subtitle">{moment.unix(unixDate).format('dddd, DD MMMM')}</p>
    </div>
  );
};

CardHeader.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  unixDate: PropTypes.number,
};

CardHeader.defaultProps = {
  city: null,
  country: null,
  unixDate: null,
};

export default CardHeader;
