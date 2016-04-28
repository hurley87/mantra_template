import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';


class Keypad extends React.Component {
  render() {
    return (
      <div>
        <h3 className='text-center numbers'>
          {this.props.question().num1} {this.props.operator} {this.props.question().num2} 
        </h3>
        <ol>
          { this.keypad() }
          <li onClick={this.props.clearInput.bind(this)}>C</li>
        </ol>
      </div>
    )
  }
  keypad() {
    const list_items = [];
    [0,1,2,3,4,5,6,7,8,'.',9].map( i => {
      list_items.push(this.listInput(i));
    });
    return list_items;
  }
  listInput(num) {
    return <li key={num} onClick={this.props.clickNumber.bind(this, num, this.props.operator, this.props.questionId)}> {num }</li>
  }
}

export default Keypad;