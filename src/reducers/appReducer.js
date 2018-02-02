// @flow
import {setLocation, setRainValue, setTempValues, updateMorningRange, updateEveningRange} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  location: setLocation,
  rainValue: setRainValue,
  morningRange: updateMorningRange,
  eveningRange: updateEveningRange,
  temps: setTempValues
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
