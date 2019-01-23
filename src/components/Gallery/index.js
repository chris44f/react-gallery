import React, { Component } from 'react';
import Scroller from '../Scroller/index.js';
import Spotlight from '../Spotlight/index.js';
import Changer from '../Changer/index.js';
import './index.css';

class Gallery extends Component {

  render() {
    return (
      <div>
        <h1 className="gallery-title">Welcome to Christopher's Gallery</h1>
        <div className="scroller"><Scroller /></div>
        <div className="spotlight"><Spotlight /></div>
      </div>
    )
  }
}

export default Gallery
