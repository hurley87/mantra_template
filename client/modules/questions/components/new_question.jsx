import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';

class NewQuestion extends React.Component { 
  render() {
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>New Question</h1>
          <h3>
            {this.props.question().num1} {this.props.operatorSign} {this.props.question().num2} 
          </h3>
          { this.buttons() }
          <ButtonInput 
            onClick={ this.props.clearInput.bind(this, this.props.clearInput )} 
            value='clear'/>
        </Panel>
      </Col>
    )
  }
  buttons() {
    const cool_buttons = [];
    [0,1,2,3,4,5,6,7,8,9].map( i => {
      cool_buttons.push(this.buttonInput(i));
    });
    return cool_buttons;
  }
  buttonInput(num) {
    return <ButtonInput  
            key={num} onClick={this.props.clickNumber.bind(this, num, this.props.operatorSign)} 
            value={num.toString()} />
  }
}

export default NewQuestion;