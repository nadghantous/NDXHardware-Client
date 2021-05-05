import { retrieveCustomerOrders,retrieveUserPriceOrders,deleteOrder,createCustomerOrder } from '../../actions/actions';
import { toast } from 'react-toastify'


export const GET_CUSTOMERORDERS_STARTED = 'GET_CUSTOMERORDERS_STARTED'
export const GET_CUSTOMERORDERS_SUCCESS = 'GET_CUSTOMERORDERS_SUCCESS'
export const GET_CUSTOMERORDERS_ERROR = 'GET_CUSTOMERORDERS_ERROR'

export const CREATE_CUSTOMERORDERS_STARTED = 'CREATE_USER_STARTED'
export const CREATE_CUSTOMERORDERS_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_CUSTOMERORDERS_ERROR = 'CREATE_USER_ERROR'


export const GET_USERPRICEORDERS_STARTED = 'GET_USERPRICEORDERS_STARTED'
export const GET_USERPRICEORDERS_SUCCESS = 'GET_USERPRICEORDERS_SUCCESS'
export const GET_USERPRICEORDERS_ERROR = 'GET_USERPRICEORDERS_ERROR'

export const DELETE_CUSTOMERORDERS_SUCCESS = 'DELETE_CUSTOMERORDERS_SUCCESS'
export const DELETE_CUSTOMERORDERS_STARTED = 'DELETE_CUSTOMERORDERS_STARTED'
export const DELETE_CUSTOMERORDERS_ERROR = 'DELETE_CUSTOMERORDERS_ERROR'


const customerordersActions = {

    retrieveCustomerOrders: (data) => async (dispatch) => {
      try {
        dispatch({
          type: GET_CUSTOMERORDERS_STARTED,
        });
        let response = await retrieveCustomerOrders(data)
        dispatch({
          type: GET_CUSTOMERORDERS_SUCCESS,
          payload: {
            data: response,
          },
        });
      } catch (error) {
        toast.error('ERROR GETTING CUSTOMER ORDERS' + error)
        dispatch({
          type: GET_CUSTOMERORDERS_ERROR,
        });
      }
    },
    createCustomerOrder: (data) => async(dispatch) => {
        try {
            dispatch({
              type: CREATE_CUSTOMERORDERS_STARTED,
            });
            await createCustomerOrder(data);
            dispatch({
              type: CREATE_CUSTOMERORDERS_SUCCESS,
              payload: {
                message: 'added successfully',
              }
            });
          } catch (err) {
            dispatch({
              type: CREATE_CUSTOMERORDERS_ERROR,
              payload: {
                message: 'failed to create customer order!',
              }
            })
          }
    },
    retrieveUserPriceOrders: (data) => async (dispatch) => {
        try {
            dispatch({
              type: GET_USERPRICEORDERS_STARTED,
            });
            let response = await retrieveUserPriceOrders(data)
            console.log(response);
            dispatch({
              type: GET_USERPRICEORDERS_SUCCESS,
              payload: {
                data: response,
              },
            });
          } catch (error) {
            toast.error('ERROR GETTING CUSTOMER ORDERS BY PRICE VALUE' + error)
            dispatch({
              type: GET_USERPRICEORDERS_ERROR,
            });
          }
    },
    deleteOrder: (id) => async (dispatch) => {
        try {
          dispatch({
            type: DELETE_CUSTOMERORDERS_STARTED,
          });
          await deleteOrder(id);
          dispatch({
            type: DELETE_CUSTOMERORDERS_SUCCESS,
            payload: {
              message: 'deleted order successfully',
            }
          });
        } catch (err) {
          dispatch({
            type: DELETE_CUSTOMERORDERS_ERROR,
          })
        }
      },
  };
  
  export default customerordersActions;