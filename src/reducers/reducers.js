import { SET_LOCATION, SET_RAIN, UPDATE_MORNING, UPDATE_EVENING, SET_TEMPS } from '../constants/actionTypes';
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

export function setTempValues (state = initialState.temps, action) {
  const {type, data} = action;
  const dataValue = {};
  if (data) {
    dataValue[data.type] = data.value;
  }
  return type !== SET_TEMPS ? state : (
    Object.assign({}, state, dataValue)
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
