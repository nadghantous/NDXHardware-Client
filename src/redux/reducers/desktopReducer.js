import {
    GET_PCS_STARTED,
    GET_PCS_SUCCESS,
    GET_PCS_ERROR,
    GET_GAMERPCS_STARTED,
    GET_GAMERPCS_SUCCESS,
    GET_GAMERPCS_ERROR,
    GET_NONGAMERPCS_STARTED,
    GET_NONGAMERPCS_SUCCESS,
    GET_NONGAMERPCS_ERROR,
    ADD_PC_STARTED,
    ADD_PC_SUCCESS,
    ADD_PC_ERROR,
    GET_DESKTOPS_STARTED,
    GET_DESKTOPS_SUCCESS,
    GET_DESKTOPS_ERROR
       } from "../actions/desktops";
 
       const defaultState = {
         pcs: [],
         gamerpcs: [],
         nongamerpcs:[],
         desktops: [],
         isLoading: false,
         didCreate: false,
        addMessage: '',
       };
 
       function pcReducer(state = defaultState, action) {
         switch (action.type) {
           case GET_PCS_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_PCS_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               pcs: action.payload.data,
             });
           case GET_PCS_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               pcs: [],
             });
             case GET_DESKTOPS_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_DESKTOPS_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               desktops: action.payload.data,
             });
           case GET_DESKTOPS_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               desktops: [],
             });
             case GET_GAMERPCS_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_GAMERPCS_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               gamerpcs: action.payload.data,
             });
           case GET_GAMERPCS_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               gamerpcs: [],
             });
             case GET_NONGAMERPCS_STARTED:
             return Object.assign({}, state, {
               isLoading: true,
             });
           case GET_NONGAMERPCS_SUCCESS:
             return Object.assign({}, state, {
               isLoading: false,
               nongamerpcs: action.payload.data,
             });
           case GET_NONGAMERPCS_ERROR:
             return Object.assign({}, state, {
               isLoading: false,
               nongamerpcs: [],
             });
             case ADD_PC_STARTED:
              return Object.assign({},state, {
                isLoading: true,
                didCreate: false
              });
            case ADD_PC_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                addMessage: action.payload.message
              });
            case ADD_PC_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                didCreate: false,
                addMessage: action.payload.message,
              });
           default:
             return state;
         }
       }
       
 export default pcReducer;