import React, { Component } from 'react';
import './index.css'

class Image extends Component {

  render() {

    const { id, src, caption, category, handleClick, favourite} = this.props
    return (
      <div className="imageContainer" onClick={() => handleClick(src, caption, category, id, favourite)}>
        <img src={src} alt=""/>
      </div>
    )
  }
}

export default Image
