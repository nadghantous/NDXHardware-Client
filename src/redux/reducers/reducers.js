import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cpuReducer from './cpuReducer';
import gpuReducer from './gpuReducer';
import ramReducer from './ramReducer';
import storageReducer from './storageReducer';
import motherboardReducer from './motherboardReducer';
import psuReducer from './psuReducer';
import pcReducer from './desktopReducer';
import customerOrdersReducer from './customerOrdersReducer';
import continentReducer from './continentReducer'
import adminsReducer from './adminsReducer';
const reducers = combineReducers({
  
  userReducer,
  cpuReducer,
  gpuReducer,
  ramReducer,
  storageReducer,
  motherboardReducer,
  psuReducer,
  pcReducer,
  customerOrdersReducer,
  continentReducer,
  adminsReducer
});

export default reducers;