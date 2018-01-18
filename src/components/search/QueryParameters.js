import React, {Component} from 'react';
import store from 'store';
import {setRainValue, setLowTempValues, setHighTempValues, updateMorningRange, updateEveningRange} from 'actions/actions';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import TimePicker from 'material-ui/TimePicker';

export default class QueryParameters extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRainSlider = (evt, value) => {
    store.dispatch(setRainValue(value));
  }

  updateLowTempValue = (evt, value) => {
    store.dispatch(setLowTempValues(parseInt(value, 10)));
  }

  updateHighTempValue = (evt, value) => {
    store.dispatch(setHighTempValues(parseInt(value, 10)));
  }

  handleMorningStartChange = (evt, value) => {
    store.dispatch(updateMorningRange([value, this.props.morningRange[1]]));
  }

  handleMorningEndChange = (evt, value) => {
    store.dispatch(updateMorningRange([this.props.morningRange[0], value]));
  }

  handleEveningStartChange = (evt, value) => {
    store.dispatch(updateEveningRange([value, this.props.eveningRange[1]]));
  }

  handleEveningEndChange = (evt, value) => {
    store.dispatch(updateEveningRange([this.props.eveningRange[0], value]));
  }

  resetApp = () => {
    this.props.resetApp();
  }

  render() {

    const sliderStyle = {
      height: 'auto',
      marginTop: '10px',
      marginBottom: '25px'
    };

    const tempStyles = {
      width: '49%'
    }

    return (
      <div className={`query-parameter-container ${this.props.location.hasOwnProperty('address') ? 'show-search-params' : 'top-translate'}`}>
        <h1 className='query-params-header'>Then, change any parameters to guide you</h1>
        <div className='temp-range-wrap'>
          <div>Set low and high temperature range</div>
          <div className='temp-range-container'>
            <TextField style={tempStyles} hintText='Low Temp' type='number' onChange={this.updateLowTempValue} value={this.props.lowTemp} />
            <TextField style={tempStyles} hintText='High Temp' type='number' onChange={this.updateHighTempValue} value={this.props.highTemp} />
          </div>
        </div>
        <div className='percent-rain-container'>
          <div>Chance of rain</div>
          <Slider
            min={0}
            max={100}
            step={1}
            sliderStyle={sliderStyle}
            value={this.props.rainValue}
            onChange={this.handleRainSlider}
          />
          <div className='rain-percent-value'>{this.props.rainValue}%</div>
        </div>
        <div className='time-range-container'>
          <div className='commute-window'>Set your commute windows</div>
          <div>
            <div className='date-picker-title'>Morning: </div>
            <div className='date-range morning-date-range'>
              <TimePicker
                minutesStep={60}
                className='time-picker'
                format='ampm'
                hintText='12hr Format'
                defaultTime={this.props.morningRange ? this.props.morningRange[0] : null}
                onChange={this.handleMorningStartChange}
              />
              <TimePicker
                minutesStep={60}
                className='time-picker'
                format='ampm'
                hintText='12hr Format'
                defaultTime={this.props.morningRange ? this.props.morningRange[1] : null}
                onChange={this.handleMorningEndChange}
              />
            </div>
          </div>
          <div>
            <div className='date-picker-title'>Evening: </div>
            <div className='date-range evening-date-range'>
              <TimePicker
                minutesStep={60}
                className='time-picker'
                format='ampm'
                hintText='12hr Format'
                defaultTime={this.props.eveningRange ? this.props.eveningRange[0] : null}
                onChange={this.handleEveningStartChange}
              />
              <TimePicker
                minutesStep={60}
                className='time-picker'
                format='ampm'
                hintText='12hr Format'
                defaultTime={this.props.eveningRange ? this.props.eveningRange[1] : null}
                onChange={this.handleEveningEndChange}
              />
            </div>
          </div>
        </div>
        <div className='reset-location' onClick={this.resetApp}>New search</div>
      </div>
    );
  }
}
