import axios from 'axios';
import * as types from '../types/weatherTypes';

const fetchWeatherRequest = () => ({
  type: types.FETCH_WEATHER_REQUEST,
});

const fetchWeatherSuccess = weather => ({
  type: types.FETCH_WEATHER_SUCCESS,
  payload: weather,
});

const fetchWeatherFailure = () => ({
  type: types.FETCH_WEATHER_FAILURE,
});

export const fetchWeather = city => async dispatch => {
  dispatch(fetchWeatherRequest());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_WEATHER_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    );
    const [skyInfo] = res.data.weather;
    const result = {
      id: res.data.id,
      city: res.data.name,
      country: res.data.sys.country,
      temp: res.data.main.temp,
      date: res.data.dt,
      wind: res.data.wind.speed,
      humidity: res.data.main.humidity,
      icon: skyInfo.icon,
      description: skyInfo.description,
    };
    return dispatch(fetchWeatherSuccess(result));
  } catch (error) {
    return dispatch(fetchWeatherFailure());
  }
};

const fetchLinkedWeatherRequest = () => ({
  type: types.FETCH_LINKED_WEATHER_REQUEST,
});

const fetchLinkedWeatherSuccess = weather => ({
  type: types.FETCH_LINKED_WEATHER_SUCCESS,
  payload: weather,
});

const fetchLinkedWeatherFailure = () => ({
  type: types.FETCH_LINKED_WEATHER_FAILURE,
});

export const fetchLinkedWeather = city => async dispatch => {
  dispatch(fetchLinkedWeatherRequest());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_WEATHER_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    );
    const [skyInfo] = res.data.weather;
    const result = {
      id: res.data.id,
      city: res.data.name,
      country: res.data.sys.country,
      temp: res.data.main.temp,
      icon: skyInfo.icon,
      description: skyInfo.description,
    };
    return dispatch(fetchLinkedWeatherSuccess(result));
  } catch (error) {
    return dispatch(fetchLinkedWeatherFailure());
  }
};

export const updateLinkedCities = cities => ({
  type: types.UPDATE_LINKED_CITIES,
  payload: cities,
});

export const toggleManagementModal = () => ({
  type: types.TOGGLE_MANAGEMENT_MODAL,
});
