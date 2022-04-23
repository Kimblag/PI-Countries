import axios from "axios";

import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_DETAILS,
  EMPTY_COUNTRY_DETAIL,
  FILTER_BY_NAME,
  FILTER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  FILTER_BY_SEASON,
  FILTER_BY_ACTIVITY,
  CREATE_ACTIVITY,
  FILTER_BY_DIFFICULTY
} from "../constants/constants";

export function getAllCountries() {
  return (dispatch) => {
    return axios
      .get(`/countries`)
      .then((response) => {
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: response.data,
        });
      })
      .catch((error) => console.error(error));
  };
}

export function getCountriesByName(query) {
  return (dispatch) => {
    return axios
      .get(`/countries?name=${query}`)
      .then((response) => {
        dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: response.data,
        });
      })
      .catch((error) => {
        alert("Country not found", error);
      });
  };
}

export const getCountryDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/countries/${id}`);
      dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export function emptyCountryDetail() {
  return {
    type: EMPTY_COUNTRY_DETAIL,
  };
}

//* by name
export const filterByName = (payload) => {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
};

export const filterByDifficulty = (payload) =>{
  return{
    type: FILTER_BY_DIFFICULTY,
    payload: parseInt(payload),
  }
}

export const filterByPopulation = (payload) => {
  return {
    type: FILTER_BY_POPULATION,
    payload,
  };
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
};

export const filterBySeason = (payload) => {
  return {
    type: FILTER_BY_SEASON,
    payload,
  };
};
export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload,
  };
};

export const createActivity = (payload) => {
  return function () {
    const response = axios.post(`/activity`, payload);
    response
      .then((data) => {
        return {
          type: CREATE_ACTIVITY,
          payload: data.data,
        };
      })
      .catch((error) => {
        alert(error, 'Activity not created');
        console.error(error)
      });
  };
};
