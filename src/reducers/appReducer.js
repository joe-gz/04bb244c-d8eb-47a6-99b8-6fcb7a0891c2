// @flow
import {setLocation} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  location: setLocation
});

export default appReducer;
