import { retrieveCPUS, addCPU } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_PROCESSORS_STARTED = 'GET_PROCESSORS_STARTED'
export const GET_PROCESSORS_SUCCESS = 'GET_PROCESSORS_SUCCESS'
export const GET_PROCESSORS_ERROR = 'GET_PROCESSORS_ERROR'
export const ADD_PROCESSOR_STARTED = 'ADD_PROCESSOR_STARTED'
export const ADD_PROCESSOR_SUCCESS = 'ADD_PROCESSOR_SUCCESS'
export const ADD_PROCESSOR_ERROR = 'ADD_PROCESSOR_ERROR'

const cpusActions = {

    retrieveCPUS: () => async (dispatch) => {
      try {
        dispatch({
          type: GET_PROCESSORS_STARTED,
        });
        let response = await retrieveCPUS()
        dispatch({
          type: GET_PROCESSORS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING CPUS' + error)
        dispatch({
          type: GET_PROCESSORS_ERROR,
        });
      }
    },
    addCPU: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_PROCESSOR_STARTED,
        });
        await addCPU(data);
        dispatch({
          type: ADD_PROCESSOR_SUCCESS,
          payload: {
            message: 'CPU Added Succesfully !',
          }
        });
        toast.success("CPU Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_PROCESSOR_ERROR,
          payload: {
            message: 'failed to add CPU!',
          }
        })
       
      }
    }
  };
  
  export default cpusActions;