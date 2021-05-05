import { retrieveRAMS,addRAM } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_RAMS_STARTED = 'GET_RAMS_STARTED'
export const GET_RAMS_SUCCESS = 'GET_RAMS_SUCCESS'
export const GET_RAMS_ERROR = 'GET_RAMS_ERROR'
export const ADD_RAM_STARTED = 'ADD_RAM_STARTED'
export const ADD_RAM_SUCCESS = 'ADD_RAM_SUCCESS'
export const ADD_RAM_ERROR = 'ADD_RAM_ERROR'
const ramsActions = {

    retrieveRAMS: () => async (dispatch) => {
      try {
        dispatch({
          type: GET_RAMS_STARTED,
        });
        let response = await retrieveRAMS()
        dispatch({
          type: GET_RAMS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING RAMS' + error)
        dispatch({
          type: GET_RAMS_ERROR,
        });
      }
    },
    addRAM: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_RAM_STARTED,
        });
        await addRAM(data);
        dispatch({
          type: ADD_RAM_SUCCESS,
          payload: {
            message: 'RAM Added Succesfully !',
          }
        });
        toast.success("RAM Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_RAM_ERROR,
          payload: {
            message: 'failed to add RAM!',
          }
        })
       
      }
    }
  };
  
  export default ramsActions;