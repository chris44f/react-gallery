import React, { Component } from 'react';
import './index.css'

class Spotlight extends Component {

  render() {
    const { src, caption, category } = this.props

    return (
      <div>
        <h2>Caption: {caption}</h2>
        <img src={src} />
        <h3>It belongs to the category of {category}</h3>
      </div>
    )
  }
}

export default Spotlight
