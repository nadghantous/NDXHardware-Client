import { retrieveContinents } from '../../actions/actions';
import { toast } from 'react-toastify'

export const GET_CONTINENTS_STARTED = 'GET_CONTINENTS_STARTED'
export const GET_CONTINENTS_SUCCESS = 'GET_CONTINENTS_SUCCESS'
export const GET_CONTINENTS_ERROR = 'GET_CONTINENTS_ERROR'

const continentsActions = {
    retrieveContinents:() => async (dispatch) => {
        try {
            dispatch({
              type: GET_CONTINENTS_STARTED,
            });
            let response = await retrieveContinents()
            dispatch({
              type: GET_CONTINENTS_SUCCESS,
              payload: {
                data: response,
              },
            });
          } catch (error) {
            toast.error('ERROR GETTING CONTINENTS' + error)
            dispatch({
              type: GET_CONTINENTS_ERROR,
            });
          }
        },
    }
export default continentsActions;