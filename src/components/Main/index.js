import React, { Component } from 'react';
import './index.css';
import Scroller from '../scroller'
import Spotlight from '../spotlight'
import Buttons from '../buttons'
import Img from '../image/ebo.jpg'
import Img2 from '../image/2.JPG'
import Img3 from '../image/3.JPG'

class Main extends Component {

  state = {
    images: [],
    src: "",
    caption: "",
    category: "",
    favourite: false,
  }

  componentDidMount() {
    this.getData()
  }

/*speak to Rich - cant seem to use that json with another variable, i.e newArray = json */

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => this.setState({ images: json.slice(0,100) }))
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
    imageToUpdate.title = this.state.caption
    this.setState({
      imageToUpdate
    })
  }

  handleFavourite = (id) => {
    let newImages = [...this.state.images]
    const imageToUpdate = newImages[id-1]
    imageToUpdate.favourite = !this.state.favourite
    this.setState({ imageToUpdate, favourite: !this.state.favourite })
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
