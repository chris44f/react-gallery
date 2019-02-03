import React, { Component } from 'react';

class Buttons extends Component {

  render() {

    const { handleChangeCategory, handleChangeCaption } = this.props

    return(
      <div>
        <input type="text" onChange={(event)=>handleChangeCategory(event.target.value)}/>
        <input type="text" onChange={(event)=>handleChangeCaption(event.target.value)}/>
      </div>
    )
  }
}

export default Buttons
