import React, { Component } from 'react';
import Image from '../Image/index.js';
import './index.css';
import image1 from '../../assets/1.JPG';
import image2 from '../../assets/2.JPG';
import image3 from '../../assets/3.JPG';
import image4 from '../../assets/4.JPG';
import image5 from '../../assets/5.JPG';
import image6 from '../../assets/6.JPG';
import image7 from '../../assets/7.JPG';
import image8 from '../../assets/8.JPG';

class Scroller extends Component {
  state = {
    id: "",
    src: "",
    category: "",
    caption: "",
    favourite: false,
    alt: "",
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

  changeCaption = (id,e) => {
    console.log(id)
    console.log(e)
    console.log(e.target.value)
    // let images = [...this.state.images]
    // const imageToFind = this.state.images.filter((images) => images.id === id)
    // imageToFind[0].caption = e.target.value
    // this.setState({imageToFind})
  }

  updateCaption = (e) => {
    this.setState({caption: e.target.value})
}

  addImage = () => {
    this.setState({ images: this.state.images.concat({
      id: this.state.images.length +1,
      src: this.state.src,
      category: this.state.category,
      caption: this.state.caption,
      favourite: this.state.favourite,
      alt: this.state.alt,
    })})
  }

  render() {
    return (
      <div>
        <h1>Welcome to Christopher's Gallery</h1>
        {this.state.images.map(images => (
          <Image
            id={images.id}
            src={images.src}
            alt={images.alt}
            category={images.category}
            caption={images.caption}
            favourites={images.favourites}
            addImage={this.addImage}
            updateCaption={this.updateCaption}
            changeCaption={this.changeCaption}
          />
        ))}
        <div>
          <input list="categories" />
          <datalist id="categories">
            <option value="Landscapes" />
            <option value="People" />
            <option value="Buildings" />
          </datalist>
          <button>Update category</button>
          <span>Add / Change caption?</span>
        </div>
        <button onClick={() => this.addImage()}>Add another image</button>
      </div>
    )
  }
}

export default Scroller;
