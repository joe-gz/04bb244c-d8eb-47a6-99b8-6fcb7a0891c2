import React, {Component} from 'react';
import {icons, tileIcons} from 'utils/config';
import {GridList, GridTile} from 'material-ui/GridList';


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
      const commuteText = commute === 'metro' ? 'Better take the metro!' : 'Feel free to bike!'
      results.push(
        <GridTile
          className='grid-tile'
          key={'weather_morning_' + i.toString()}
          title='Add Date'
          subtitle={
            <div>
              <div>Temp: {data.temperature}</div>
              <div>Chance of rain: {data.precipProbability}%</div>
              <div>{commuteText}</div>
            </div>
          }
          actionIcon={<img alt={commute} className='weather-image' src={icons[data.icon]} />}
          >
          <img src={tileIcons[commute]} />
        </GridTile>
      );
    });

    this.props.eveningRange.forEach((time, i) => {
      const data = this.props.data.data[time.getHours()];
      const commute = this.props.rainValue >= data.precipProbability * 100 && this.props.lowTemp < data.temperature && this.props.highTemp > data.temperature ? 'bike' : 'metro';
      const commuteText = commute === 'metro' ? 'Better take the metro!' : 'Feel free to bike!'
      results.push(
        <GridTile
          style={{height: '50%'}}
          className='grid-tile'
          key={'weather_evening_' + i.toString()}
          title='Add Date'
          subtitle={
            <div>
              <div>Temp: {data.temperature}</div>
              <div>Chance of rain: {data.precipProbability}%</div>
              <div>{commuteText}</div>
            </div>
          }
          actionIcon={<img alt={commute} className='weather-image' src={icons[data.icon]} />}
          >
          <img src={tileIcons[commute]} />
        </GridTile>
      );
    });

    return results;
  }

  render() {
    console.log(this.props);
    const resultArray = this.props.data.hasOwnProperty('data') ? this.createResults() : [];
    return (
      <div className={`results-wrap ${this.props.data.hasOwnProperty('data') ? 'show-results' : ''}`}>
        <GridList
          className='grid-list'
          style={{height: '100%', margin: '0px'}}
          >
          {resultArray}
        </GridList>
      </div>
    );
  }
}
