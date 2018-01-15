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

export const initialState = {
  location: [],
  rainValue: 0,
  highTemp: 85,
  lowTemp: 32
}

export const icons = {
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
