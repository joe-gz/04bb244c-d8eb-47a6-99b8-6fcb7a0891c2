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

export default appReducer;
