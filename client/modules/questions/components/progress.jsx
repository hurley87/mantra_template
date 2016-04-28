import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';


class Progress extends React.Component {
  render() {
    return (
      <div className='progress'>
        <div className='bar' style={{"width": this.props.percentage + '%'}}>
        </div>
      </div>
    )
  }
}

export default Progress;