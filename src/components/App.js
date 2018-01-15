import React, { Component } from 'react';
import store from 'store';
import Search from 'components/search/Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {

    const {location} = this.state

    return (
      <div className='App'>
        <Search location={location}/>
      </div>
    );
  }
}

export default App;
