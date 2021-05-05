import {
    GET_MOTHERBOARDS_STARTED,
    GET_MOTHERBOARDS_SUCCESS,
    GET_MOTHERBOARDS_ERROR,
    ADD_MOTHERBOARD_STARTED,
    ADD_MOTHERBOARD_SUCCESS,
    ADD_MOTHERBOARD_ERROR
       } from "../actions/motherboards";
 
       const defaultState = {
         motherboards: [],
         isLoading: false,
         didCreate: false,
         addMessage: '',
       };
 
       function motherboardReducer(state = defaultState, action) {
         switch (action.type) {
           case GET_MOTHERBOARDS_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_MOTHERBOARDS_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               motherboards: action.payload.data,
             });
           case GET_MOTHERBOARDS_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               motherboards: [],
             });
             case ADD_MOTHERBOARD_STARTED:
              return Object.assign({},state, {
                isLoading: true,
                didCreate: false
              });
            case ADD_MOTHERBOARD_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                addMessage: action.payload.message
              });
            case ADD_MOTHERBOARD_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                didCreate: false,
                addMessage: action.payload.message,
              });
           default:
             return state;
         }
       }
       
 export default motherboardReducer;
       