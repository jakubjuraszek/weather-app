import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import LinkedCard from '../components/LinkedCard/LinkedCard';

import * as weatherActionCreators from '../actions/weatherActions';

const CardContainer = ({
  weather,
  isError,
  weatherActions,
  isFetching,
  linkedCities,
  linkedCitiesWeather,
}) => {
  const { city } = useParams();

  const fetchWeather = () =>
    Promise.all([
      weatherActions.fetchWeather(city),
      ...linkedCities.map(linkedCity => weatherActions.fetchLinkedWeather(linkedCity)),
    ]);

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, [city]);

  return (
    <>
      <Card weather={weather} isFetching={isFetching} isError={isError} />
      {linkedCitiesWeather.map(linkedWeather => (
        <LinkedCard
          key={linkedWeather.id}
          icon={linkedWeather.icon}
          city={linkedWeather.city}
          country={linkedWeather.country}
          temperature={linkedWeather.temp}
        />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  weather: state.weather.weather,
  linkedCities: state.weather.linkedCities,
  linkedCitiesWeather: state.weather.linkedCitiesWeather,
  isFetching: state.weather.fetchRequestCount > 0,
  isError: state.weather.isError,
});

const mapDispatchToProps = dispatch => ({
  weatherActions: bindActionCreators(weatherActionCreators, dispatch),
});

CardContainer.propTypes = {
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
  isFetching: PropTypes.bool,
  isError: PropTypes.bool.isRequired,
  linkedCities: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkedCitiesWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  weatherActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

CardContainer.defaultProps = {
  isFetching: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
