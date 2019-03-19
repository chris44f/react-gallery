import React, { Component } from 'react';
import './index.css';
import Scroller from '../scroller'
import Spotlight from '../spotlight'
import Buttons from '../buttons'
import Img from '../image/ebo.jpg'
import Img2 from '../image/2.JPG'
import Img3 from '../image/3.JPG'

const images = [
  {
    src: Img,
    id: 1,
    alt: "",
    caption: "Caption 1",
    category: "Cat1",
    favourite: false
  },
  {
    src: Img2,
    id: 2,
    alt: "",
    caption: "Caption 2",
    category: "Cat2",
    favourite: false
  },
  {
    src: Img3,
    id: 3,
    alt: "",
    caption: "Caption 3",
    category: "Cat3",
    favourite: true
  }
]

class Main extends Component {

  state = {
    images: [],
    src: "",
    caption: "",
    category: "",
    favourite: "",
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => this.setState({ images: json }))
  }

  handleClick = (src, caption, category, id, favourite) => {
    this.setState({
      src: src,
      caption: caption,
      category: category,
      id: id,
      favourite: favourite
    })
  }

  handleChangeCategory = (e) => {
    this.setState({
      category: e,
    })
  }

  saveCategory = (id) => {
    let newImages = [...this.state.images]
    const imageToUpdate = newImages[id-1]
    imageToUpdate.category = this.state.category
    this.setState({
      imageToUpdate
    })
  }

  handleChangeCaption = (e) => {
    this.setState({
      caption: e,
    })
  }

  saveCaption = (id) => {
    let newImages = [...this.state.images]
    const imageToUpdate = newImages[id-1]
    imageToUpdate.caption = this.state.caption
    this.setState({
      imageToUpdate
    })
  }

  handleFavourite = (id) => {
    let newImages = [...this.state.images]
    const imageToUpdate = newImages[id-1]
    imageToUpdate.favourite = !imageToUpdate.favourite
    this.setState({
      imageToUpdate
    })
  }

  render() {
    return (
      <div>
        <div className="scroller">
          <Scroller
            images={this.state.images}
            handleClick={this.handleClick}
          />
        </div>
        <div className="spotlight">
          <Spotlight
            src={this.state.src}
            caption={this.state.caption}
            category={this.state.category}
            handleFavourite={this.handleFavourite}
            favourite={this.state.favourite}
            id={this.state.id}
          />
        </div>
        <div className="buttons">
          <Buttons
            handleChangeCaption={this.handleChangeCaption}
            handleChangeCategory={this.handleChangeCategory}
            saveCategory={this.saveCategory}
            saveCaption={this.saveCaption}
            id={this.state.id}
          />
        </div>
      </div>
    )
  }
}

export default Main
