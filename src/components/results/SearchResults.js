import React, {Component} from 'react';

export default class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className={`results-wrap ${this.props.data.hasOwnProperty('data') ? 'show-results' : ''}`}>
        results!
      </div>
    );
  }
}
