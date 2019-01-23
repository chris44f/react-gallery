import React, { Component } from 'react';
import './index.css';

class Changer extends Component {

render() {
  console.log(this.props)
  return (
    <div>
      <span>Add / Change caption?</span>
      <input type="text" onChange={(e,id)=>this.props.changeCaption(e,this.props.id)}/>
      <button>Update category</button>
      <input list="categories" />
      <datalist id="categories">
        <option value="Landscapes" />
        <option value="People" />
        <option value="Buildings" />
      </datalist>
    </div>
  )
}

}

export default Changer
