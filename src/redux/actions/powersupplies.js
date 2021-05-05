import { retrievePSUS,addPSU } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_PSUS_STARTED = 'GET_PSUS_STARTED'
export const GET_PSUS_SUCCESS = 'GET_PSUS_SUCCESS'
export const GET_PSUS_ERROR = 'GET_PSUS_ERROR'
export const ADD_PSU_STARTED = 'ADD_PSU_STARTED'
export const ADD_PSU_SUCCESS = 'ADD_PSU_SUCCESS'
export const ADD_PSU_ERROR = 'ADD_PSU_ERROR'
const psusActions = {

    retrievePSUS: () => async (dispatch) => {
      try {
        dispatch({
          type: GET_PSUS_STARTED,
        });
        let response = await retrievePSUS()
        dispatch({
          type: GET_PSUS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING PSUS' + error)
        dispatch({
          type: GET_PSUS_ERROR,
        });
      }
    },
    addPSU: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_PSU_STARTED,
        });
        await addPSU(data);
        dispatch({
          type: ADD_PSU_SUCCESS,
          payload: {
            message: 'PSU Added Succesfully !',
          }
        });
        toast.success("PSU Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_PSU_ERROR,
          payload: {
            message: 'failed to add PSU!',
          }
        })
       
      }
    }
  };
  
  export default psusActions;