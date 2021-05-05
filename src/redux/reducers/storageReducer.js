import {
    GET_STORAGES_STARTED,
    GET_STORAGES_SUCCESS,
   GET_STORAGES_ERROR,
   ADD_STORAGE_STARTED,
   ADD_STORAGE_SUCCESS,
   ADD_STORAGE_ERROR
       } from "../actions/storages";
 
       const defaultState = {
         storages: [],
         isLoading: false,
         didCreate: false,
        addMessage: '',
       };
 
       function storageReducer(state = defaultState, action) {
         switch (action.type) {
           case GET_STORAGES_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_STORAGES_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               storages: action.payload.data,
             });
           case GET_STORAGES_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               storages: [],
             });
             case ADD_STORAGE_STARTED:
              return Object.assign({},state, {
                isLoading: true,
                didCreate: false
              });
            case ADD_STORAGE_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                addMessage: action.payload.message
              });
            case ADD_STORAGE_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                didCreate: false,
                addMessage: action.payload.message,
              });
           default:
             return state;
         }
       }
       
 export default storageReducer;
       