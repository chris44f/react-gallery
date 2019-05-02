import React, { Component } from 'react';
import './index.css'

class Buttons extends Component {

  render() {

    const { handleChangeCategory, handleChangeCaption, saveCategory, saveCaption } = this.props

    return(
      <div>
        <div className="update">Update Category:</div>
        <input type="text" onChange={(event, id)=>handleChangeCategory(event.target.value)}/>
        <button className="category-button" onClick={()=>saveCategory(this.props.id)}>Save</button>
        <br />
        <div className="update">Update Caption:</div>
        <input type="text" onChange={(event, id)=>handleChangeCaption(event.target.value)}/>
        <button className="caption-button" onClick={()=>saveCaption(this.props.id)}>Save</button>
        <br />
      </div>
    )
  }
}

export default Buttons
