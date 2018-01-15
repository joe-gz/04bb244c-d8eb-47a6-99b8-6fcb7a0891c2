import React, {Component} from 'react';
import store from 'store';
import {setLocation} from 'actions/actions';

export default class LocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      place: '',
      place_location: ''
    };
  }

  componentDidMount() {
    const inputNode = document.getElementById('pac-input');
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener('place_changed', () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;
      console.log(place);
      console.log(location);

      this.setState({
        place_formatted: place.formatted_address,
        place_location: [place.geometry.location.lat(), place.geometry.location.lng()],
      });
    });
  }

  setLocation = () => {
    store.dispatch(setLocation({address: this.state.place_formatted, location: this.state.place_location}));
  }

  render() {

    return (
      <div className={`address-search-wrap ${this.props.location.hasOwnProperty('address') ? 'hide-location-search' : ''}`}>
        <h1>First, find a location</h1>
        <div className='search-input-wrap'>
          <input id='pac-input' type='text' placeholder='Enter a location' />
        </div>
        <div onClick={this.setLocation}>Next</div>
      </div>
    );
  }
}
