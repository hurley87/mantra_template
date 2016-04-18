import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import NewQuestion from '../../questions/containers/new_question.js'

class Add1 extends React.Component {
  render() {
    return (
      <div>
        <NewQuestion operatorSign='+' min='6' max ='9' />
      </div>
    )
  }
}

export default Add1;