import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class NewQuestion extends React.Component { 
  render() {
    return (
      <div>
        <div id='steps'>
          <div className="header">
            <a href='/addition'><i className="fa fa-caret-left"></i> Addition</a>
            <span className='pull-right'>{this.props.profile.points} <i className="fa fa-heart"></i></span>
          </div>
          <div className='progress'>
            <div className='bar' style={{"width": this.props.percentage + '%'}}>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
              <h3 className='text-center numbers'>
                {this.props.question().num1} {this.props.operator} {this.props.question().num2} 
              </h3>
              <ol>
                { this.list() }
                <li onClick={this.props.clearInput.bind(this)}>C</li>
              </ol>
          </Col>
        </Row>
      </div>
    )
  }
  list() {
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

export default NewQuestion;