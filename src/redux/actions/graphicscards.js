import { retrieveGPUS, addGPU } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_GRAPHICSCARDS_STARTED = 'GET_GRAPHICSCARDS_STARTED'
export const GET_GRAPHICSCARDS_SUCCESS = 'GET_GRAPHICSCARDS_SUCCESS'
export const GET_GRAPHICSCARDS_ERROR = 'GET_GRAPHICSCARDS_ERROR'
export const ADD_GRAPHICSCARD_STARTED = 'ADD_GRAPHICSCARD_STARTED'
export const ADD_GRAPHICSCARD_SUCCESS = 'ADD_GRAPHICSCARD_SUCCESS'
export const ADD_GRAPHICSCARD_ERROR = 'ADD_GRAPHICSCARD_ERROR'

const gpusActions = {

    retrieveGPUS: () => async (dispatch) => {
      try {
        dispatch({
          type: GET_GRAPHICSCARDS_STARTED,
        });
        let response = await retrieveGPUS()
        dispatch({
          type: GET_GRAPHICSCARDS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING GPUS' + error)
        dispatch({
          type: GET_GRAPHICSCARDS_ERROR,
        });
      }
    },
    addGPU: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_GRAPHICSCARD_STARTED,
        });
        await addGPU(data);
        dispatch({
          type: ADD_GRAPHICSCARD_SUCCESS,
          payload: {
            message: 'GPU Added Succesfully !',
          }
        });
        toast.success("GPU Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_GRAPHICSCARD_ERROR,
          payload: {
            message: 'failed to add GPU!',
          }
        })
       
      }
    }
  };
  
  export default gpusActions;