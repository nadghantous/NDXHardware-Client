import {
   GET_RAMS_STARTED,
   GET_RAMS_SUCCESS,
   GET_RAMS_ERROR,
   ADD_RAM_STARTED,
   ADD_RAM_SUCCESS,
   ADD_RAM_ERROR
      } from "../actions/rams";

      const defaultState = {
        rams: [],
        isLoading: false,
        didCreate: false,
        addMessage: '',
      };

      function ramReducer(state = defaultState, action) {
        switch (action.type) {
          case GET_RAMS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_RAMS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              rams: action.payload.data,
            });
          case GET_RAMS_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              rams: [],
            });
            case ADD_RAM_STARTED:
              return Object.assign({},state, {
                isLoading: true,
                didCreate: false
              });
            case ADD_RAM_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                addMessage: action.payload.message
              });
            case ADD_RAM_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                didCreate: false,
                addMessage: action.payload.message,
              });
          default:
            return state;
        }
      }
      
export default ramReducer;
      