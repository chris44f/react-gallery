import React, { Component } from 'react';
import './index.css';
import Scroller from '../scroller'
import Spotlight from '../spotlight'
import Buttons from '../buttons'

class Main extends Component {

  state = {
    images: [],
    src: "",
    caption: "",
    category: "",
    favourite: false,
    spotlightVisible: false,
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
      favourite: favourite,
      spotlightVisible: true
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

  spotlightRender = () => {
    if (this.state.spotlightVisible===true) {
      return (<div>
                <div className="spotlight">
                  <Spotlight
                    src={this.state.src}
                    caption={this.state.caption}
                    category={this.state.category}
                    handleFavourite={this.handleFavourite}
                    favourite={this.state.favourite}
                    id={this.state.id}
                    closeSpotlight={this.closeSpotlight}
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
                <div className="scroller-horizontal">
                  <Scroller
                    images={this.state.images}
                    handleClick={this.handleClick}
                  />
                </div>
              </div>)
    } else {
      return (
        <div>
          <h1 className="gallery-title">Welcome to the Gallery!</h1>
          <h2 className="gallery-title">Click on an image to get started</h2>
          <div className="scroller-full">
            <Scroller
              images={this.state.images}
              handleClick={this.handleClick}
            />
          </div>
      </div>
      )
    }
  }

  closeSpotlight = () => {
    this.setState({ spotlightVisible: false })
  }

  render() {
    return (
      <div className="gallery-wrapper">
        {this.spotlightRender()}
      </div>
    )
  }
}

export default Main
