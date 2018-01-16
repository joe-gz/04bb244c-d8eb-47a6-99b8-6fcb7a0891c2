import { SET_LOCATION, SET_RAIN, SET_HIGH, SET_LOW, UPDATE_MORNING, UPDATE_EVENING } from '../constants/actionTypes';
import {initialState} from '../utils/config';

export function setLocation (state = initialState.location, action) {
  const {type, data} = action;
  return type !== SET_LOCATION ? state : (
    data
  );
}

export function setRainValue (state = initialState.rainValue, action) {
  const {type, data} = action;
  return type !== SET_RAIN ? state : (
    data
  );
}

export function setHighTempValues (state = initialState.highTemp, action) {
  const {type, data} = action;
  return type !== SET_HIGH ? state : (
    data
  );
}

export function setLowTempValues (state = initialState.lowTemp, action) {
  const {type, data} = action;
  return type !== SET_LOW ? state : (
    data
  );
}

export function updateMorningRange (state = initialState.morningRange, action) {
  const {type, data} = action;
  return type !== UPDATE_MORNING ? state : (
    data
  );
}

export function updateEveningRange (state = initialState.eveningRange, action) {
  const {type, data} = action;
  return type !== UPDATE_EVENING ? state : (
    data
  );
}
