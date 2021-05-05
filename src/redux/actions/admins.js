import { retrieveAdmins,createAdmin } from '../../actions/actions';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const GET_ADMINS_STARTED = 'GET_ADMINS_STARTED'
export const GET_ADMINS_SUCCESS = 'GET_ADMINS_SUCCESS'
export const GET_ADMINS_ERROR = 'GET_ADMINS_ERROR'

export const CREATE_ADMIN_STARTED = 'CREATE_ADMIN_STARTED'
export const CREATE_ADMIN_SUCCESS = 'CREATE_ADMIN_SUCCESS'
export const CREATE_ADMIN_ERROR = 'CREATE_ADMIN_ERROR'

toast.configure();

const adminsActions = {

  retrieveAdmins: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ADMINS_STARTED,
      });
      let response = await retrieveAdmins()
      dispatch({
        type: GET_ADMINS_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING ADMINS' + error)
      dispatch({
        type: GET_ADMINS_ERROR,
      });
    }
  },
  createAdmin: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_ADMIN_STARTED,
      });
      await createAdmin(data);
      dispatch({
        type: CREATE_ADMIN_SUCCESS,
        payload: {
          message: 'Admin Account Created Succesfully !',
        }
      });
      toast.success("Admin Account Successfully Created!");
    } catch (err) {
      dispatch({
        type: CREATE_ADMIN_ERROR,
        payload: {
          message: 'failed to create admin account!',
        }
      })
     
    }
  }
};

export default adminsActions;