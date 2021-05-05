import { retrieveStorages, addStorage } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_STORAGES_STARTED = 'GET_STORAGES_STARTED'
export const GET_STORAGES_SUCCESS = 'GET_STORAGES_SUCCESS'
export const GET_STORAGES_ERROR = 'GET_STORAGES_ERROR'
export const ADD_STORAGE_STARTED = 'ADD_STORAGE_STARTED'
export const ADD_STORAGE_SUCCESS = 'ADD_STORAGE_SUCCESS'
export const ADD_STORAGE_ERROR = 'ADD_STORAGE_ERROR'

const storagesActions = {

    retrieveStorages: () => async (dispatch) => {
      try {
        dispatch({
          type: GET_STORAGES_STARTED,
        });
        let response = await retrieveStorages()
        dispatch({
          type: GET_STORAGES_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING STORAGES' + error)
        dispatch({
          type: GET_STORAGES_ERROR,
        });
      }
    },
    addStorage: (data) => async (dispatch) => {
      try {
        dispatch({
          type: ADD_STORAGE_STARTED,
        });
        await addStorage(data);
        dispatch({
          type: ADD_STORAGE_SUCCESS,
          payload: {
            message: 'Storage Added Succesfully !',
          }
        });
        toast.success("Storage Successfully Added!");
      } catch (err) {
        dispatch({
          type: ADD_STORAGE_ERROR,
          payload: {
            message: 'failed to add Storage!',
          }
        })
       
      }
    }
  };
  
  export default storagesActions;