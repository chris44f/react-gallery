import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from './assets/1.JPG';
import image2 from './assets/2.JPG';
import image3 from './assets/3.JPG';
import image4 from './assets/4.JPG';
import image5 from './assets/5.JPG';
import image6 from './assets/6.JPG';
import image7 from './assets/7.JPG';
import image8 from './assets/8.JPG';

class Scroller extends Component {
  state = {
    images: [
      {
        id: "",
        src: "",
        category: "",
        caption: "",
        favourite: false,
        alt: "",
      }
    ]
  }

  addImage = () => this.setState({ images: this.state.images.concat({
    id: this.state.images.length +1,
    src: "https://cdn.iwastesomuchtime.com/769570e7-0061-4bcc-b602-8d3b0248ebcc.jpeg", //doesnt work
    category: "",
    caption: "",
    favourite: false,
    alt: "",
  })})

  updatingCategory = (event, id) => {
    let images = [...this.state.images]
    const imageToFind = this.state.images.filter((images) => images.id === id)
    let category = images[0].category
    this.setState({ category: event.target.value })
}

  saveCategory = (currentCategory, id) => {
    let images = [...this.state.images]
    const imageToFind = this.state.images.filter((images) => images.id === id)
    images[0].category = currentCategory
    this.setState({imageToFind})
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
            updatingCategory={this.updatingCategory}
            saveCategory={this.saveCategory}/>
        ))}
        <button onClick={() => this.addImage()}>Add another image</button>
      </div>
    )
  }
}

class Image extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <h3>Category: {this.props.category}</h3>
        <input list="categories" onChange={(event,id) => this.props.updatingCategory(event,this.props.id)} />
        <datalist id="categories">
          <option value="Landscapes" />
          <option value="People" />
          <option value="Buildings" />
        </datalist>
        <button onClick={() => {this.props.saveCategory(this.props.category,this.props.id)}}>Update category</button>
        <img src="" alt="alttext" />
        //<img src={"/assets/" + this.props.id + ".jpg"} alt={this.props.alt} />//
        <span>{this.props.caption==="" ? "Add caption?" : "Caption:"}</span><input type="text" default={this.props.caption} />
        <br />
        <span>Favourite?<input type="checkbox" checked={this.props.favourites ? true : false} /></span>
      </div>
    )
  }
}

export default Scroller;
