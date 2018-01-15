import React, {Component} from 'react';

export default class QueryParameters extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className={`query-parameter-container ${this.props.location.hasOwnProperty('address') ? 'show-search-params' : 'top-translate'}`}>
        <div>params</div>
      </div>
    );
  }
}
