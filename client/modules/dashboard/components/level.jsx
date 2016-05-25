import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Progress from '../../questions/components/progress';

class Level extends React.Component {
  percentage() {
    return (this.props.points).toString();
  }
  render() {
    return (
      <div>
        <Progress percentage={this.percentage()} />
        <div className="project">
          <div className="info">
            <div className="name">{this.props.title}</div>
            <div className="last-update">
              { parseInt(parseFloat(this.percentage())/10) } / 10 lessons completed
            </div>
          </div>
          <div className="members row">
            <div className='col-xs-6'>
              {this.props.right} <i className="fa fa-check"></i>
            </div>
            <div className='col-xs-6 text-right'>
              {this.props.wrong} <i className="fa fa-times"></i>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Level;