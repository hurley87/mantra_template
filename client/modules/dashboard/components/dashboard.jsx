import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Metrics from './metrics.jsx'
import Level from './level.jsx'

class Dashboard extends React.Component {
  render() {
    return (
      <div id='panel' className='dashboard'>
        { this.props.points > 0 ? <Metrics points={this.props.points} profile={this.props.profile} ratio={this.props.ratio} /> : null } 
        <div className='steps row'>
          <div className='col-sm-4'>
            <Level points={this.props.profile.countPoints} title='Counting' link='/counting' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.addPoints} title='Addition' link='/addition' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.subPoints} title='Subtraction' link='/subtraction' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.multiPoints} title='Multiplication' link='/multiplication' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.divPoints} title='Division' link='/division' />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;