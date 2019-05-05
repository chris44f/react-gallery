import React, { Component } from 'react';
import './index.css'
import Image from '../image'
import { TiStar } from 'react-icons/ti'
import { TiStarOutline} from 'react-icons/ti'

class Spotlight extends Component {

  render() {

    const { id, src, caption, category, handleFavourite, favourite, closeSpotlight } = this.props

    const buttonFavourite = () => (
      this.props.favourite ?
        <TiStar className="like-star" onClick={()=>handleFavourite(id)}/>
        : <TiStarOutline className="empty-star" onClick={()=>handleFavourite(id)}/>
    )

    return (
      <div className="spotlight-wrapper">
        {buttonFavourite()}
        <h3 className="spotlight-category">It belongs to the category of {category}</h3>
        <img src={src} />
        <h2 className="spotlight-caption">{caption}</h2>
        <button className="x-button" onClick={()=>closeSpotlight()}>X</button>
      </div>
    )
  }
}

export default Spotlight
