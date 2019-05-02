import React, { Component } from 'react';
import './index.css'
import Image from '../image'

class Spotlight extends Component {

  render() {

    const { id, src, caption, category, handleFavourite, favourite } = this.props

    return (
      <div>
        <input type="checkbox" onClick={()=>handleFavourite(id)}/>
        <h3>It belongs to the category of {category}</h3>
        <img src={src} />
        <h2>{caption}</h2>
      </div>
    )
  }
}

export default Spotlight
