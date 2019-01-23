import React, { Component } from 'react';
import Image from '../Image/index.js';
import './index.css';

class Spotlight extends Component {
  state = {
    src: "",
    category: "",
    caption: "",
    favourite: false,
    images: [
      {
        id: 1,
        src: "",
        category: "jamaica",
        caption: "jamaica",
        favourite: false,
        alt: "jamaican image",
      }
    ]
  }

  changeCaption = (e,id) => {
    let images = [...this.state.images]
    const imageToFind = this.state.images.filter((images) => images.id === id)
    imageToFind[0].caption = e.target.value
    this.setState({imageToFind})
  }

  render() {
    return (
      <div className="spotlight">
        <input type="checkbox" className="favourite"/>
        <h4 className="category">Category: Jimbob</h4>
        {this.state.images.map(images => (
          <Image
            src={images.src}
            alt={images.alt}
          />
        ))}
        <h3 className="caption">Caption: I like jimbobs</h3>
      </div>
        // <div>
        //   // <Changer
        //   //   changeCaption={this.changeCaption}
        //   //   caption={images.caption}
        //   //   id={images.id}
        //   // />
        // </div>
        // <button onClick={() => this.addImage()}>Add another image</button>
      // </div>
    )
  }
}

export default Spotlight;
