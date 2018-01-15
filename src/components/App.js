import React, { Component } from 'react';
import store from 'store';
import LocationSearch from 'components/search/LocationSearch';
import LogoColumn from 'components/search/LogoColumn';
import QueryParameters from 'components/search/QueryParameters';
import SearchResults from 'components/results/SearchResults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

  render() {

    const {location, rainValue, lowTemp, highTemp, data} = this.state

    return (
      <MuiThemeProvider>
        <div className='App'>
          <div className='container'>
            <div className='search-wrap'>
              <LocationSearch setData={this.setData} location={location}/>
              <QueryParameters location={location} rainValue = {rainValue} lowTemp={lowTemp} highTemp={highTemp}/>
            </div>
            <div className='window-container'>
              <LogoColumn/>
              <SearchResults data={data} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
