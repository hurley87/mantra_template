import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row } from 'react-bootstrap';

class StudentName extends React.Component { 
  render() {
    return (
      <div>
       <a href={`/students/${this.props.studentId}`}><h1 style={{marginTop: '0px'}}>{this.props.username}</h1></a> 
      </div>
    )
  }
}

export default StudentName;