import React, { Component } from 'react';
import Image from '../image'

const Scroller = ({ images, handleClick }) => (
  <div>
    {images.map((image) => (
        <Image
          src={image.url}
          id={image.id}
          caption={image.title}
          category={image.category}
          favourite={image.favourite}
          handleClick={handleClick}
        />
    ))}
  </div>
)

export default Scroller
