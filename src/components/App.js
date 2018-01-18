import React, { Component } from 'react';
import store from 'store';
import {resetApp} from 'actions/actions';
import LocationSearch from 'components/search/LocationSearch';
import LogoColumn from 'components/search/LogoColumn';
import QueryParameters from 'components/search/QueryParameters';
import SearchResults from 'components/results/SearchResults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: '#eee',
    selectionColor: '#bbb',
    trackColorSelected: '#eee'
  },
  textField: {
    borderColor: '#eee',
    focusColor: '#bbb',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ...store.getState()
    };
  }

  unsubscribe: () => void;

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  storeDidUpdate:Function = () => {
    this.setState(store.getState());
  };

  setData = (data) => {
    this.setState({data: data.hourly});
  }

  resetApp = () => {
    store.dispatch(resetApp());
    this.setState({data: {}});
  }

  render() {

    const {location, rainValue, lowTemp, highTemp, data, morningRange, eveningRange} = this.state

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className='App'>
          <div className='container'>
            <div className='search-wrap'>
              <LocationSearch setData={this.setData} location={location}/>
              <QueryParameters resetApp={this.resetApp} morningRange={morningRange} eveningRange={eveningRange} location={location} rainValue = {rainValue} lowTemp={lowTemp} highTemp={highTemp}/>
            </div>
            <div className='window-container'>
              <LogoColumn/>
              <SearchResults data={data} morningRange={morningRange} eveningRange={eveningRange} rainValue={rainValue} lowTemp={lowTemp} highTemp={highTemp}/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
