import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader/CardHeader';
import CardContent from './CardContent/CardContent';
import Spinner from '../../common/Spinner/Spinner';
import NotFound from '../../common/NotFound/NotFound';

const Card = ({ weather, isFetching, isError }) => {
  if (isFetching) {
    return <Spinner wrapperClassName="card" />;
  }
  return (
    <>
      {isError ? (
        <NotFound />
      ) : (
        <>
          <CardHeader city={weather.city} country={weather.country} unixDate={weather.date} />
          <section className="card">
            <CardContent
              icon={weather.icon}
              wind={weather.wind}
              humidity={weather.humidity}
              temperature={weather.temp}
              description={weather.description}
            />
          </section>
        </>
      )}
    </>
  );
};

Card.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.number,
    icon: PropTypes.string,
    temp: PropTypes.number,
    wind: PropTypes.number,
    humidity: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  isError: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Card;
