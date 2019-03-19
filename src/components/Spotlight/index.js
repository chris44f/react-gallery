import React, { Component } from 'react';
import './index.css'

class Spotlight extends Component {

  render() {
    const { src, caption, category, handleFavourite, favourite} = this.props

    return (
      <div>
        <h2>Caption: {caption}</h2><button onClick={()=>handleFavourite(this.props.id)}>{favourite ? "On" : "Off"}</button>
        <img src={src} />
        <h3>It belongs to the category of {category}</h3>
      </div>
    )
  }
}

export default Spotlight
