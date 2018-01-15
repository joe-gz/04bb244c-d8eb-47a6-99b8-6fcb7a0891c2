import React, {Component} from 'react';
import store from 'store';
import {setRainValue, setLowTempValues, setHighTempValues} from 'actions/actions';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import TimePicker from 'material-ui/TimePicker';

export default class QueryParameters extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRainSlider = (evt, value) => {
    console.log(value);
    store.dispatch(setRainValue(value));
  }

  updateLowTempValue = (evt, value) => {
    console.log(value);
    store.dispatch(setLowTempValues(parseInt(value, 10)));
  }

  updateHighTempValue = (evt, value) => {
    console.log(value);
    store.dispatch(setHighTempValues(parseInt(value, 10)));
  }

  handleMorningStartChange = (evt, value) => {
    console.log(value);
    console.log(value.getHours());
  }

  handleMorningEndChange = (evt, value) => {
    console.log(value);
    console.log(value.getHours());
  }

  handleEveningStartChange = (evt, value) => {
    console.log(value);
    console.log(value.getHours());
  }

  handleEveningEndChange = (evt, value) => {
    console.log(value);
    console.log(value.getHours());
  }

  render() {

    console.log(this.props.rainValue);
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
        <h1>Then, change any parameters to guide you</h1>
        <div>
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
          <div>Set your commute windows</div>
          <div>Morning: </div>
          <div className='date-range morning-date-range'>
            <TimePicker
              minutesStep={60}
              className='time-picker'
              format='ampm'
              hintText='12hr Format'
              value={this.state.morningStart}
              onChange={this.handleMorningStartChange}
            />
            <TimePicker
              minutesStep={60}
              className='time-picker'
              format='ampm'
              hintText='12hr Format'
              value={this.state.morningEnd}
              onChange={this.handleMorningEndChange}
            />
          </div>
          <div>Evening: </div>
          <div className='date-range evening-date-range'>
            <TimePicker
              minutesStep={60}
              className='time-picker'
              format='ampm'
              hintText='12hr Format'
              value={this.state.eveningStart}
              onChange={this.handleEveningStartChange}
            />
            <TimePicker
              minutesStep={60}
              className='time-picker'
              format='ampm'
              hintText='12hr Format'
              value={this.state.eveningEnd}
              onChange={this.handleEveningEndChange}
            />
          </div>
        </div>
        <div className='reset-location'>New search</div>
      </div>
    );
  }
}
