import React, {Component} from 'react';

export default class LocationSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className='location-search-container'>
        <div className='address-search-wrap'>Address search here</div>
        <div className='search-icons-wrap'>Other stuff here</div>
      </div>
    );
  }
}
