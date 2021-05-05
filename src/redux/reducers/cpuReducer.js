import {
    GET_PROCESSORS_STARTED,
    GET_PROCESSORS_SUCCESS,
    GET_PROCESSORS_ERROR,
    ADD_PROCESSOR_ERROR,
    ADD_PROCESSOR_SUCCESS,
    ADD_PROCESSOR_STARTED
      } from "../actions/processors";

      const defaultState = {
        processors: [],
        isLoading: false,
        didCreate: false,
        addMessage: '',
      };

      function cpuReducer(state = defaultState, action) {
        switch (action.type) {
          case GET_PROCESSORS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_PROCESSORS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              processors: action.payload.data,
            });
          case GET_PROCESSORS_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              processors: [],
            });
          case ADD_PROCESSOR_STARTED:
            return Object.assign({},state, {
              isLoading: true,
              didCreate: false
            });
          case ADD_PROCESSOR_SUCCESS:
            return Object.assign({},state, {
              isLoading: false,
              didCreate: true,
              addMessage: action.payload.message
            });
          case ADD_PROCESSOR_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              didCreate: false,
              addMessage: action.payload.message,
            });
          default:
            return state;
        }
      }
      
export default cpuReducer;
      