import {
   GET_CUSTOMERORDERS_STARTED,
   GET_CUSTOMERORDERS_SUCCESS,
   GET_CUSTOMERORDERS_ERROR,
   GET_USERPRICEORDERS_STARTED,
   GET_USERPRICEORDERS_SUCCESS,
   CREATE_CUSTOMERORDERS_STARTED,
   CREATE_CUSTOMERORDERS_SUCCESS,
   CREATE_CUSTOMERORDERS_ERROR,
   GET_USERPRICEORDERS_ERROR,
   DELETE_CUSTOMERORDERS_STARTED,
   DELETE_CUSTOMERORDERS_SUCCESS,
   DELETE_CUSTOMERORDERS_ERROR
      } from "../actions/customerorders";
      
      const defaultState = {
        customerorders: [],
        customerpriceorders: [],
        isLoading: false,
        createMessage: '',
        delMessage: '',
        didCreate: false,
        didDelete : false

      };
      
      function customerOrdersReducer(state = defaultState, action) {
        switch (action.type) {
          case GET_CUSTOMERORDERS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_CUSTOMERORDERS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              customerorders: action.payload.data,
            });
          case GET_CUSTOMERORDERS_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              customerorders: [],
            });
      
          case GET_USERPRICEORDERS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_USERPRICEORDERS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              customerpriceorders: action.payload.data,
            });
          case GET_USERPRICEORDERS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                customerpriceorders: [],
              });
          case CREATE_CUSTOMERORDERS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
              didCreate: false,
            });
          case CREATE_CUSTOMERORDERS_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                createMessage: action.payload.message,
              });
          case CREATE_CUSTOMERORDERS_ERROR: 
          return Object.assign({}, state, {
            isLoading: false,
            didCreate: false,
            createMessage: action.payload.message,
          });
          case DELETE_CUSTOMERORDERS_STARTED: 
          return Object.assign({}, state, {
            isLoading: true,
            didDelete: false
          });
          case DELETE_CUSTOMERORDERS_SUCCESS: 
          return Object.assign({}, state,{
            isLoading: false,
            delMessage: 'DELETED SUCCESSFULLY',
            didDelete: true
          });
          case DELETE_CUSTOMERORDERS_ERROR: 
          return Object.assign({}, state, {
            isLoading: false,
            delMessage: 'UNABLE TO DELETE.',
            didDelete: false
          });
          default:
            return state;
        }
      }
      
      export default customerOrdersReducer;