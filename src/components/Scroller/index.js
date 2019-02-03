import React, { Component } from 'react';
import Image from '../image'

const Scroller = ({ images, handleClick }) => (
  <div className="test">
    {images.map((image) => (
        <Image
          src={image.src}
          id={image.id}
          caption={image.caption}
          category={image.category}
          handleClick={handleClick}
        />
    ))}
  </div>
)

export default Scroller
