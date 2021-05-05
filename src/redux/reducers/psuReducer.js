import {
    GET_PSUS_STARTED,
    GET_PSUS_SUCCESS,
    GET_PSUS_ERROR,
    ADD_PSU_STARTED,
    ADD_PSU_SUCCESS,
    ADD_PSU_ERROR
       } from "../actions/powersupplies";
 
       const defaultState = {
         psus: [],
         isLoading: false,
         didCreate: false,
        addMessage: '',
       };
 
       function psuReducer(state = defaultState, action) {
         switch (action.type) {
           case GET_PSUS_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_PSUS_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               psus: action.payload.data,
             });
           case GET_PSUS_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               psus: [],
             });
             case ADD_PSU_STARTED:
              return Object.assign({},state, {
                isLoading: true,
                didCreate: false
              });
            case ADD_PSU_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                addMessage: action.payload.message
              });
            case ADD_PSU_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                didCreate: false,
                addMessage: action.payload.message,
              });
           default:
             return state;
         }
       }
       
 export default psuReducer;
       