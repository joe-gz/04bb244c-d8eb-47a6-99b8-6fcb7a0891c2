import React, {Component} from 'react';
import {icons} from 'utils/config';

export default class LogoColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  createIconContainer = () => {
    const iconContainer = [];
    for (const key in icons) {
      iconContainer.push(
        <img key={key} alt={key} style={{height: '100px', width: '100px', margin: '1rem'}} src={icons[key]} />
      )
    }
    return iconContainer
  }

  render() {

    const iconContainer = this.createIconContainer();

    return (
      <div className='search-icons-wrap'>
        <h1 className='logo-header'>Commuter plan!</h1>
        <div className='icons-container'>
          {iconContainer}
        </div>
      </div>
    );
  }
}
