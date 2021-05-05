import {retrieveDesktops, retrievePCConfigurations,addPCConfiguration, retrieveGamerPCConfigurations,retrieveNonGamerPCConfigurations } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_PCS_STARTED = 'GET_PCS_STARTED'
export const GET_PCS_SUCCESS = 'GET_PCS_SUCCESS'
export const GET_PCS_ERROR = 'GET_PCS_ERROR'
export const GET_DESKTOPS_STARTED = 'GET_DESKTOPS_STARTED'
export const GET_DESKTOPS_SUCCESS = 'GET_DESKTOPS_SUCCESS'
export const GET_DESKTOPS_ERROR = 'GET_DESKTOPS_ERROR'
export const GET_GAMERPCS_STARTED = 'GET_GAMERPCS_STARTED'
export const GET_GAMERPCS_SUCCESS = 'GET_GAMERPCS_SUCCESS'
export const GET_GAMERPCS_ERROR = 'GET_GAMERPCS_ERROR'
export const GET_NONGAMERPCS_STARTED = 'GET_NONGAMERPCS_STARTED'
export const GET_NONGAMERPCS_SUCCESS = 'GET_NONGAMERPCS_SUCCESS'
export const GET_NONGAMERPCS_ERROR = 'GET_NONGAMERPCS_ERROR'
export const ADD_PC_STARTED = 'ADD_PC_STARTED'
export const ADD_PC_SUCCESS = 'ADD_PC_SUCCESS'
export const ADD_PC_ERROR = 'ADD_PC_ERROR'
const pcsActions = {
  retrieveDesktops: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_DESKTOPS_STARTED,
      });
      let response = await retrieveDesktops();
      dispatch({
        type: GET_DESKTOPS_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING DESKTOPS' + error)
      dispatch({
        type: GET_DESKTOPS_ERROR,
      });
    }
  },
    retrievePCConfigurations: (data) => async (dispatch) => {
      try {
        dispatch({
          type: GET_PCS_STARTED,
        });
        let response = await retrievePCConfigurations(data)
        dispatch({
          type: GET_PCS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING PC CONFIGURATIONS' + error)
        dispatch({
          type: GET_PCS_ERROR,
        });
      }
    },
    retrieveGamerPCConfigurations: (data) => async (dispatch) => {
      try {
        dispatch({
          type: GET_GAMERPCS_STARTED,
        });
        let response = await retrieveGamerPCConfigurations(data)
        dispatch({
          type: GET_GAMERPCS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING GAMER PC CONFIGURATIONS' + error)
        dispatch({
          type: GET_GAMERPCS_ERROR,
        });
      }
    },
    retrieveNonGamerPCConfigurations: (data) => async (dispatch) => {
      try {
        dispatch({
          type: GET_NONGAMERPCS_STARTED,
        });
        let response = await retrieveNonGamerPCConfigurations(data)
        dispatch({
          type: GET_NONGAMERPCS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING NON GAMER PC CONFIGURATIONS' + error)
        dispatch({
          type: GET_NONGAMERPCS_ERROR,
        });
      }
    },
    addPCConfiguration: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_PC_STARTED,
        });
        await addPCConfiguration(data);
        dispatch({
          type: ADD_PC_SUCCESS,
          payload: {
            message: 'PC Added Succesfully !',
          }
        });
        toast.success("PC Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_PC_ERROR,
          payload: {
            message: 'failed to add PC!',
          }
        })
       
      }
    }
  };
  
  export default pcsActions;