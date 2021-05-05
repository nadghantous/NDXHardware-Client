import {
    GET_GRAPHICSCARDS_STARTED,
    GET_GRAPHICSCARDS_SUCCESS,
    GET_GRAPHICSCARDS_ERROR,
    ADD_GRAPHICSCARD_STARTED,
    ADD_GRAPHICSCARD_SUCCESS,
    ADD_GRAPHICSCARD_ERROR
      } from "../actions/graphicscards";

      const defaultState = {
        graphicscards: [],
        isLoading: false,
        didCreate: false,
        addMessage: '',
      };

      function gpuReducer(state = defaultState, action) {
        switch (action.type) {
          case GET_GRAPHICSCARDS_STARTED:
            return Object.assign({}, state, {
              isLoading: true,
            });
          case GET_GRAPHICSCARDS_SUCCESS:
            return Object.assign({}, state, {
              isLoading: false,
              graphicscards: action.payload.data,
            });
          case GET_GRAPHICSCARDS_ERROR:
            return Object.assign({}, state, {
              isLoading: false,
              graphicscards: [],
            });
            case ADD_GRAPHICSCARD_STARTED:
              return Object.assign({},state, {
                isLoading: true,
                didCreate: false
              });
            case ADD_GRAPHICSCARD_SUCCESS:
              return Object.assign({},state, {
                isLoading: false,
                didCreate: true,
                addMessage: action.payload.message
              });
            case ADD_GRAPHICSCARD_ERROR:
              return Object.assign({}, state, {
                isLoading: false,
                didCreate: false,
                addMessage: action.payload.message,
              });
          default:
            return state;
        }
      }
      
export default gpuReducer;
      