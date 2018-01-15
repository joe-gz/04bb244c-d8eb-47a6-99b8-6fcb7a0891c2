import React, {Component} from 'react';
import LocationSearch from './LocationSearch';
import LogoColumn from './LogoColumn';
import QueryParameters from './QueryParameters';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className='search-container'>
        <div className='search-wrap'>
          <LocationSearch location={this.props.location}/>
          <QueryParameters location={this.props.location}/>
        </div>
        <LogoColumn/>
      </div>
    );
  }
}
