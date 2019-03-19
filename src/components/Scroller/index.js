import React, { Component } from 'react';
import Image from '../image'

const Scroller = ({ images, handleClick }) => (
  <div className="test">
    {images.map((image) => (
        <Image
          src={image.url}
          id={image.id}
          caption={image.title}
          handleClick={handleClick}
        />
    ))}
  </div>
)

export default Scroller
