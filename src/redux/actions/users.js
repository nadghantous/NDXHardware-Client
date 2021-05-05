import { retrieveUsers,createUser,findUser} from '../../actions/actions';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const GET_USERS_STARTED = 'GET_USERS_STARTED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const CREATE_USER_STARTED = 'CREATE_USER_STARTED'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'

export const GET_USER_STARTED = 'GET_USER_STARTED'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'

toast.configure();

const usersActions = {

  retrieveUsers: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_USERS_STARTED,
      });
      let response = await retrieveUsers()
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING USERS' + error)
      dispatch({
        type: GET_USERS_ERROR,
      });
    }
  },
  createUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_USER_STARTED,
      });
      await createUser(data);
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: {
          message: 'Account Created Succesfully !',
        }
      });
      toast.success("Account Successfully Created!");
    } catch (err) {
      dispatch({
        type: CREATE_USER_ERROR,
        payload: {
          message: 'failed to create account!',
        }
      })
     
    }
  },
  getUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_STARTED,
      });
     let result = await findUser(data);
     if(result === true){
      dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          message: 'User Found !',
          didFind: true,
        }
      });
     }
     else{
      dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          message: 'User Not Found !',
          didFind: false,
        }
      });
     }
      
    } catch (err) {
      dispatch({
        type: GET_USER_ERROR,
        payload: {
          message: 'failed to find user!',
        }
      })
     
    }
  }
};

export default usersActions;