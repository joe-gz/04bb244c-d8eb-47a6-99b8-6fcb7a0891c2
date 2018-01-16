import React, {Component} from 'react';
import {icons} from 'utils/config';

export default class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  createResults = () => {
    const results = [];
    this.props.morningRange.forEach((time, i) => {
      const data = this.props.data.data[time.getHours()];
      const commute = this.props.rainValue >= data.precipProbability * 100 && this.props.lowTemp < data.temperature && this.props.highTemp > data.temperature ? 'bike' : 'metro';
      results.push(
        <div>
          <img key={'weather_morning_' + i.toString()} alt={commute} className='weather-image' src={icons[data.icon]} />
          <div>Temp: {data.temperature}</div>
          <div>Chance of rain: {data.precipProbability}%</div>
          <img key={'morning_' + i.toString()} alt={commute} className='logo-image' src={icons[commute]} />
          {commute === 'metro' ?
            <div>Better take the metro!</div> :
            <div>Feel free to bike!</div>
          }
        </div>
      );
    });

    this.props.eveningRange.forEach((time, i) => {
      const data = this.props.data.data[time.getHours()];
      const commute = this.props.rainValue >= data.precipProbability * 100 && this.props.lowTemp < data.temperature && this.props.highTemp > data.temperature ? 'bike' : 'metro';
      results.push(
        <div>
          <img key={'weather_evening_' + i.toString()} alt={commute} className='weather-image' src={icons[data.icon]} />
          <div>Temp: {data.temperature}</div>
          <div>Chance of rain: {data.precipProbability}%</div>
          <img key={'evening_' + i.toString()} alt={commute} className='logo-image' src={icons[commute]} />
          {commute === 'metro' ?
            <div>Better take the metro!</div> :
            <div>Feel free to bike!</div>
          }
        </div>
      );
    });

    return results;
  }

  render() {
    console.log(this.props);
    const resultArray = this.props.data.hasOwnProperty('data') ? this.createResults() : [];
    return (
      <div className={`results-wrap ${this.props.data.hasOwnProperty('data') ? 'show-results' : ''}`}>
        <div className='result-container'>
          {resultArray.length > 0 ? resultArray[0] : null}
        </div>
        <div className='result-container'>
          {resultArray.length > 0 ? resultArray[1] : null}
        </div>
        <div className='result-container'>
          {resultArray.length > 0 ? resultArray[2] : null}
        </div>
        <div className='result-container'>
          {resultArray.length > 0 ? resultArray[3] : null}
        </div>
      </div>
    );
  }
}
