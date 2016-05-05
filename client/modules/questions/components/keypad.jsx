import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';


class Keypad extends React.Component {
  render() {
    return (
      <div>
        <ol>
          { this.keypad() }
          <li onClick={this.props.clearInput.bind(this)}>C</li>
        </ol>
      </div>
    )
  }
  keypad() {
    const list_items = [];
    [7,8,9,4,5,6,1,2,3,0,'.'].map( i => {
      list_items.push(this.listInput(i));
    });
    return list_items;
  }
  listInput(num) {
    return <li key={num} onClick={this.props.clickNumber.bind(this, num, this.props.questionId)}> { num }</li>
  }
}

export default Keypad;