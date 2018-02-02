import React, {Component} from 'react';
import {icons, tileIcons} from 'utils/config';
import {GridList, GridTile} from 'material-ui/GridList';

const dateOptions = {
  weekday: 'short', month: 'short',
  day: 'numeric', hour: '2-digit', minute: '2-digit'
};

export default class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  createResults = () => {
    const results = [];
    this.props.morningRange.forEach((time, i) => {
      const data = this.props.data.data[time.getHours()];
      // Determine if metro or bike commute
      const commute = this.props.rainValue >= data.precipProbability * 100 && this.props.temps.low < data.temperature && this.props.temps.high > data.temperature ? 'bike' : 'metro';
      const commuteText = commute === 'metro' ? 'Better take the metro!' : 'Feel free to bike!'
      results.push(
        <GridTile
          className='grid-tile'
          titleBackground='rgba(0, 0, 0, 0.8)'
          key={'weather_morning_' + i.toString()}
          title={commuteText}
          subtitle={
            <div>
              <div>{time.toLocaleTimeString('en-us', dateOptions)}</div>
              <div>Temp: {data.temperature}</div>
              <div>Chance of rain: {data.precipProbability}%</div>
            </div>
          }
          actionIcon={<img alt={commute} className='weather-image' src={icons[data.icon]} />}
          >
          <img alt={commute} className='commuter-image' src={tileIcons[commute]} />
        </GridTile>
      );
    });

    this.props.eveningRange.forEach((time, i) => {
      const data = this.props.data.data[time.getHours()];
      const commute = this.props.rainValue >= data.precipProbability * 100 && this.props.temps.low < data.temperature && this.props.temps.high > data.temperature ? 'bike' : 'metro';
      const commuteText = commute === 'metro' ? 'Better take the metro!' : 'Feel free to bike!'
      results.push(
        <GridTile
          className='grid-tile'
          titleBackground='rgba(0, 0, 0, 0.8)'
          key={'weather_evening_' + i.toString()}
          title={commuteText}
          subtitle={
            <div>
              <div>{time.toLocaleTimeString('en-us', dateOptions)}</div>
              <div>Temp: {data.temperature}</div>
              <div>Chance of rain: {data.precipProbability}%</div>
            </div>
          }
          actionIcon={<img alt={commute} className='weather-image' src={icons[data.icon]} />}
          >
          <img alt={commute} className='commuter-image' src={tileIcons[commute]} />
        </GridTile>
      );
    });

    return results;
  }

  render() {
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
