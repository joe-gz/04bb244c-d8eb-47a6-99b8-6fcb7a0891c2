// @flow
import {setLocation, setRainValue, setHighTempValues, setLowTempValues} from './reducers';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
  location: setLocation,
  rainValue: setRainValue,
  highTemp: setHighTempValues,
  lowTemp: setLowTempValues
});

export default appReducer;
