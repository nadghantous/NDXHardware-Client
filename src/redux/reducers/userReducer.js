import {
GET_USERS_STARTED,
GET_USERS_SUCCESS,
GET_USERS_ERROR,
CREATE_USER_STARTED,
CREATE_USER_SUCCESS,
CREATE_USER_ERROR,
GET_USER_STARTED,
GET_USER_SUCCESS,
GET_USER_ERROR
  } from "../actions/users";
  
  const defaultState = {
    users: [],
    isFound: false,
    isLoading: false,
    createMessage: '',
    didCreate: false,
  };
  
  function userReducer(state = defaultState, action) {
    switch (action.type) { 
      case GET_USERS_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
        });
      case GET_USERS_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          users: action.payload.data,
        });
      case GET_USERS_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          users: [],
        });
  
      case CREATE_USER_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          didCreate: false,
        });
      case CREATE_USER_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: true,
          createMessage: action.payload.message,
        });
      case CREATE_USER_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          didCreate: false,
          createMessage: action.payload.message,
        });
        case GET_USER_STARTED:
        return Object.assign({}, state, {
          isLoading: true,
          isFound: false,
        });
      case GET_USER_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          isFound: true,
        });
      case CREATE_USER_ERROR:
        return Object.assign({}, state, {
          isLoading: false,
          isFound: false,
        });
      default:
        return state;
    }
  }
  
  export default userReducer;