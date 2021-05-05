import {
    GET_CONTINENTS_STARTED,
    GET_CONTINENTS_SUCCESS,
    GET_CONTINENTS_ERROR
      } from "../actions/continents";

      const defaultState = {
        continents: [],
        isLoading: false,
      };

      function continentReducer(state = defaultState, action) {
        switch (action.type) {
          case GET_CONTINENTS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_CONTINENTS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              continents: action.payload.data,
            });
          case GET_CONTINENTS_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              continents: [],
            });
          default:
            return state;
        }
      }
      
export default continentReducer;
      