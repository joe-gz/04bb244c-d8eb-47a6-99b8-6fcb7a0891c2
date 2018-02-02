import React, {Component} from 'react';
import {getData} from 'utils/api';
import store from 'store';
import {setLocation} from 'actions/actions';

export default class LocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      place_location: '',
      errorVisible: false,
      locationSelected: false
    };
  }

  componentDidMount() {
    const inputNode = document.getElementById('pac-input');

    // Create an instantiation of google autocomplete
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    // Add autocomplete event listener
    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;

      this.setState({
        place_formatted: place.formatted_address,
        place_location: [location.lat(), location.lng()],
        locationSelected: true,
        errorVisible: false
      });
    });
  }

  setLocation = () => {
    if (this.state.locationSelected === true) {
      if (this.state.errorVisible) {
        this.setState({errorVisible: false});
      }
      // Date object to midnight for consistent data search
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      const timeStamp = date.getTime()/1000;
      const params = {
        location: this.state.place_location,
        time: timeStamp
      }
      getData(params, this.props.setData);
      store.dispatch(setLocation({address: this.state.place_formatted, location: this.state.place_location}));
    } else {
      this.setState({errorVisible: true});
    }
  }

  render() {

    return (
      <div className={`address-search-wrap ${this.props.location.hasOwnProperty('address') ? 'hide-location-search' : ''}`}>
        <h1>First, find a location</h1>
        <div className='search-input-wrap'>
          <input id='pac-input' type='text' placeholder='Enter a location' />
        </div>
        {this.state.errorVisible ?
          <div className='location-error'>Please search for a location!</div> : null
        }
        <div className='set-location-next' onClick={this.setLocation}>Next</div>
      </div>
    );
  }
}
