import React, { Component } from 'react';
import './index.css';

class Image extends Component {

  render() {

    return(
      <div>
        <h3>Category:</h3>{this.props.category}
        <h4>Caption: {this.props.caption}</h4>
        <span>{this.props.alt}</span>
        <span>Favourite?<input type="checkbox" checked={this.props.favourites ? true : false} /></span>
        <button onClick={(id)=>this.props.changeCaption(this.props.id)}>click me</button>
        <input
          type="text"
          onChange={(e)=>this.props.updateCaption(e)}
          />
          <input type="text" onChange={(id,e)=>{this.props.changeCaption(this.props.id,e)}}/>
      </div>
    )
  }
}

export default Image
