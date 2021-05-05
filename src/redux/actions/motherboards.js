import { retrieveMotherboards,addMotherboard } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_MOTHERBOARDS_STARTED = 'GET_MOTHERBOARDS_STARTED'
export const GET_MOTHERBOARDS_SUCCESS = 'GET_MOTHERBOARDS_SUCCESS'
export const GET_MOTHERBOARDS_ERROR = 'GET_MOTHERBOARDS_ERROR'
export const ADD_MOTHERBOARD_STARTED = 'ADD_MOTHERBOARD_STARTED'
export const ADD_MOTHERBOARD_SUCCESS = 'ADD_MOTHERBOARD_SUCCESS'
export const ADD_MOTHERBOARD_ERROR = 'ADD_MOTHERBOARD_ERROR'

const motherboardsActions = {

    retrieveMotherboards: () => async (dispatch) => {
      try {
        dispatch({
          type: GET_MOTHERBOARDS_STARTED,
        });
        let response = await retrieveMotherboards()
        dispatch({
          type: GET_MOTHERBOARDS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING MOTHERBOARDS' + error)
        dispatch({
          type: GET_MOTHERBOARDS_ERROR,
        });
      }
    },
    addMotherboard: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_MOTHERBOARD_STARTED,
        });
        await addMotherboard(data);
        dispatch({
          type: ADD_MOTHERBOARD_SUCCESS,
          payload: {
            message: 'Motherboard Added Succesfully !',
          }
        });
        toast.success("Motherboard Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_MOTHERBOARD_ERROR,
          payload: {
            message: 'failed to add Motherboard!',
          }
        })
       
      }
    }
  };
  
  export default motherboardsActions;