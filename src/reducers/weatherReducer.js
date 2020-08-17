import * as types from '../types/weatherTypes';

const initialState = {
  weather: {},
  fetchRequestCount: 0,
  linkedCities: ['Wroclaw', 'Gdansk', 'Krakow'],
  linkedCitiesWeather: [],
  manegamentModalIsOpen: false,
  isError: false,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        linkedCitiesWeather: [],
        isError: false,
        fetchRequestCount: state.fetchRequestCount + 1,
      };
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        fetchRequestCount: state.fetchRequestCount - 1,
      };
    case types.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        fetchRequestCount: state.fetchRequestCount - 1,
        isError: true,
      };
    case types.FETCH_LINKED_WEATHER_REQUEST:
      return {
        ...state,
        fetchRequestCount: state.fetchRequestCount + 1,
      };
    case types.FETCH_LINKED_WEATHER_SUCCESS:
      return {
        ...state,
        linkedCitiesWeather: [...state.linkedCitiesWeather, action.payload],
        fetchRequestCount: state.fetchRequestCount - 1,
      };
    case types.FETCH_LINKED_WEATHER_FAILURE:
      return {
        ...state,
        fetchRequestCount: state.fetchRequestCount - 1,
      };
    case types.UPDATE_LINKED_CITIES:
      return {
        ...state,
        linkedCities: action.payload,
      };
    case types.TOGGLE_MANAGEMENT_MODAL:
      return {
        ...state,
        manegamentModalIsOpen: !state.manegamentModalIsOpen,
      };
    default:
      return state;
  }
};
