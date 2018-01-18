// @flow
import {setLocation, setRainValue, setHighTempValues, setLowTempValues, updateMorningRange, updateEveningRange} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  location: setLocation,
  rainValue: setRainValue,
  highTemp: setHighTempValues,
  lowTemp: setLowTempValues,
  morningRange: updateMorningRange,
  eveningRange: updateEveningRange
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
