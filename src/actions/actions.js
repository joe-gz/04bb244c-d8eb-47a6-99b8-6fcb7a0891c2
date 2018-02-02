import { SET_LOCATION, SET_RAIN, UPDATE_MORNING, UPDATE_EVENING, RESET_APP, SET_TEMPS } from '../constants/actionTypes';

export function resetApp (data) {
  return { type: RESET_APP, data };
}

export function setLocation (data) {
  return { type: SET_LOCATION, data };
}

export function setRainValue (data) {
  return { type: SET_RAIN, data };
}

export function setTempValues (data) {
  return { type: SET_TEMPS, data };
}

export function updateMorningRange (data) {
  return { type: UPDATE_MORNING, data };
}

export function updateEveningRange (data) {
  return { type: UPDATE_EVENING, data };
}
