import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Metrics from './metrics.jsx'
import Level from './level.jsx'

class Dashboard extends React.Component {
  render() {
    return (
      <div id='panel' className='dashboard'>
        <Metrics points={this.props.points} profile={this.props.profile} ratio={this.props.ratio} />
        <div className='steps'>
          <Level points={this.props.profile.countPoints} title='Counting' link='/counting' />
          <Level points={this.props.profile.addPoints} title='Addition' link='/addition' />
          <Level points={this.props.profile.subPoints} title='Subtraction' link='/subtraction' />
          <Level points={this.props.profile.multiPoints} title='Multiplication' link='/multiplication' />
          <Level points={this.props.profile.divPoints} title='Division' link='/division' />
        </div>
      </div>
    )
  }
}

export default Dashboard;