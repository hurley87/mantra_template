import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, ListGroupItem } from 'react-bootstrap';

class StudentsShow extends React.Component { 
  render() {
    const student = this.props.student;
    return (
      <div>
      	{student.username}
      	<div>
      		<a href={`/students/${student._id}/addition`}>Addition</a> 
      	</div>
      	<div>
      		<a href={`/students/${student._id}/subtraction`}>substraction</a> 
      	</div>
      	<div>
      		<a href={`/students/${student._id}/multiplication`}>multiplication</a> 
      	</div>
      	<div>
      		<a href={`/students/${student._id}/division`}>division</a> 
      	</div>
        <div>
          <a href={`/new/${student._id}`}>Create a Challenge</a> 
        </div>
      </div>
    )
  }
}

export default StudentsShow;