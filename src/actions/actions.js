import { SET_LOCATION, SET_RAIN, SET_LOW, SET_HIGH } from '../constants/actionTypes';

export function setLocation (data) {
  return { type: SET_LOCATION, data };
}

export function setRainValue (data) {
  return { type: SET_RAIN, data };
}

export function setLowTempValues (data) {
  return { type: SET_LOW, data };
}

export function setHighTempValues (data) {
  return { type: SET_HIGH, data };
}
