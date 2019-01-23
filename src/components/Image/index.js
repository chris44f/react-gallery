import React, { Component } from 'react';
import './index.css';

class Image extends Component {

  render() {
    return(
      <div>
        <img src="https://blog.hobbycraft.co.uk/wp-content/uploads/2018/07/mtm-ebony-featley-1.jpg" alt={this.props.alt}/>
      </div>
    )
  }
}

export default Image
