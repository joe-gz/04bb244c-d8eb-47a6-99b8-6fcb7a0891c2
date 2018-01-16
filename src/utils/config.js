import clearDay from 'images/sunny-day.svg';
import clearNight from 'images/clear-night.svg'
import rain from 'images/rain.svg';
import snow from 'images/snowy.svg';
import sleet from 'images/sleet.svg';
import wind from 'images/windy.svg';
import fog from 'images/fog.svg';
import cloudy from 'images/cloudy.svg';
import partlyCloudyDay from 'images/cloudyDay.svg';
import partlyCloudyNight from 'images/cloudyNight.svg';
import metro from 'images/metro.svg';
import bike from 'images/bike.svg';

const morningStart = new Date();
morningStart.setHours(8, 0, 0, 0);
const morningEnd = new Date();
morningEnd.setHours(9, 0, 0, 0);
const eveningStart = new Date();
eveningStart.setHours(18, 0, 0, 0);
const eveningEnd = new Date();
eveningEnd.setHours(19, 0, 0, 0);

export const initialState = {
  location: [],
  rainValue: 0,
  highTemp: 85,
  lowTemp: 32,
  morningRange: [morningStart, morningEnd],
  eveningRange: [eveningStart, eveningEnd]
}

export const icons = {
  'metro': metro,
  'bike': bike,
  'clear-day': clearDay,
  'clear-night': clearNight,
  'rain': rain,
  'snow': snow,
  'sleet': sleet,
  'wind': wind,
  'fog': fog,
  'cloudy': cloudy,
  'partly-cloudy-day': partlyCloudyDay,
  'partly-cloudy-night':partlyCloudyNight
}

export const queryUrl = 'https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/'
export const exlusions = '?exclude=currently,flags'
