import { SET_LOCATION, SET_RAIN, SET_LOW, SET_HIGH, UPDATE_MORNING, UPDATE_EVENING } from '../constants/actionTypes';

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

export function updateMorningRange (data) {
  return { type: UPDATE_MORNING, data };
}

export function updateEveningRange (data) {
  return { type: UPDATE_EVENING, data };
}
