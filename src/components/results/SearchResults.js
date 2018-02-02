import React from 'react';
import PropTypes from 'prop-types';
import {icons, tileIcons} from 'utils/config';
import {GridList, GridTile} from 'material-ui/GridList';

const dateOptions = {
  weekday: 'short', month: 'short',
  day: 'numeric', hour: '2-digit', minute: '2-digit'
};

export const SearchResults = ({weather, morningRange, eveningRange, rainValue, lowTemp, highTemp}) => {
  const createResults = () => {
    const results = [];
    morningRange.forEach((time, i) => {
      const data = weather.data[time.getHours()];
      // Determine if metro or bike commute
      const commute = rainValue >= data.precipProbability * 100 && lowTemp < data.temperature && highTemp > data.temperature ? 'bike' : 'metro';
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

    eveningRange.forEach((time, i) => {
      const data = weather.data[time.getHours()];
      const commute = rainValue >= data.precipProbability * 100 && lowTemp < data.temperature && highTemp > data.temperature ? 'bike' : 'metro';
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

  const resultArray = weather.hasOwnProperty('data') ? createResults() : [];
  return (
    <div className={`results-wrap ${weather.hasOwnProperty('data') ? 'show-results' : ''}`}>
      <GridList
        className='grid-list'
        style={{height: '100%', margin: '0px'}}
        >
        {resultArray}
      </GridList>
    </div>
  );
};

SearchResults.propTypes = {
  weather: PropTypes.object,
  morningRange: PropTypes.array,
  eveningRange: PropTypes.array,
  rainValue: PropTypes.number,
  lowTemp: PropTypes.number,
  highTemp: PropTypes.number
};
