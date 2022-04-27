import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_DETAILS,
  EMPTY_COUNTRY_DETAIL,
  FILTER_BY_ACTIVITY,
  FILTER_BY_SEASON,
  FILTER_BY_CONTINENT,
  FILTER_BY_NAME,
  FILTER_BY_POPULATION,
  CREATE_ACTIVITY,
  FILTER_BY_DIFFICULTY,
  DELETE_ACTIVITY,
  UPDATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  GET_ACTIVITY_DETAILS
} from "../constants/constants";

const initialState = {
  filteredCountries: [],
  countries: [],
  countryDetails: {},
  activities: [],
  activityDetail: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
        filteredCountries: payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        filteredCountries: payload,
      };
    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetails: payload,
      };
    case EMPTY_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetails: [],
      };
    case FILTER_BY_DIFFICULTY:
      let dificultad;
      if (payload === "all") dificultad = state.countries;
      else
        dificultad = state.countries.filter(
          (country) =>
            country.Activities &&
            country.Activities.filter(
              (activity) => activity.difficulty === payload
            ).length > 0
        );
      console.log("3: ", dificultad);
      return {
        ...state,
        filteredCountries: dificultad,
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.countries;
      const continent =
        payload === "all"
          ? allCountries
          : allCountries.filter((country) => country.continent === payload);
      return {
        ...state,
        filteredCountries: continent,
      };

    case FILTER_BY_SEASON:
      let filterActivity;
      if (payload === "all") filterActivity = state.countries;
      else
        filterActivity = state.countries.filter(
          (country) =>
            country.Activities &&
            country.Activities.filter((activity) => activity.season === payload)
              .length
        );
      return {
        ...state,
        filteredCountries: filterActivity,
      };

    case FILTER_BY_ACTIVITY:
      let filterActivityName;
      if (payload === "all") filterActivityName = state.countries;
      else
        filterActivityName = state.countries.filter(
          (country) =>
            country.Activities.filter((activity) => activity.name === payload)
              .length > 0
        );
      console.log(filterActivityName);
      return {
        ...state,
        filteredCountries: filterActivityName,
      };
    case FILTER_BY_NAME:
      var sortCountries;
      if (payload === "all") sortCountries = state.countries;
      else if (payload.length === 3) {
        sortCountries =
          payload === "ASC"
            ? state.filteredCountries.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
              })
            : state.filteredCountries.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
              });
      }
      return {
        ...state,
        filteredCountries: sortCountries,
      };
    case FILTER_BY_POPULATION:
      let sortPopulation;
      if (payload === "all") sortPopulation = state.countries;
      else
        sortPopulation =
          payload === "ASC"
            ? state.filteredCountries.sort(
                (a, b) => a.population - b.population
              )
            : state.filteredCountries.sort(
                (a, b) => b.population - a.population
              );
      return {
        ...state,
        filteredCountries: sortPopulation,
      };
      case GET_ALL_ACTIVITIES:
        return{
          ...state,
          activities: payload
        }
        case GET_ACTIVITY_DETAILS:
          return {
            ...state,
            activityDetail: payload
          }
    case CREATE_ACTIVITY:
      return {
        ...state,
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
      };
    case UPDATE_ACTIVITY:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default rootReducer;
