import { SET_LOCATION } from '../constants/actionTypes';
import {initialState} from '../config';

export function setLocation (state = initialState.location, action) {
  const {type, data} = action;
  return type !== SET_LOCATION ? state : (
    data
  );
}
