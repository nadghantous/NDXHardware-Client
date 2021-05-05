import {
    GET_ADMINS_STARTED,
    GET_ADMINS_SUCCESS,
    GET_ADMINS_ERROR,
    CREATE_ADMIN_STARTED,
    CREATE_ADMIN_SUCCESS,
    CREATE_ADMIN_ERROR
      } from "../actions/admins";
      
      const defaultState = {
        admins: [],
        isLoading: false,
        createMessage: '',
        didCreate: false,
      };
      
      function adminsReducer(state = defaultState, action) {
        switch (action.type) { 
          case GET_ADMINS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_ADMINS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              admins: action.payload.data,
            });
          case GET_ADMINS_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              admins: [],
            });
      
          case CREATE_ADMIN_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
              didCreate: false,
            });
          case CREATE_ADMIN_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              didCreate: true,
              createMessage: action.payload.message,
            });
          case CREATE_ADMIN_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              didCreate: false,
              createMessage: action.payload.message,
            });
          default:
            return state;
        }
      }
      
      export default adminsReducer;