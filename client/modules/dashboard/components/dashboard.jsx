import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Metrics from './metrics.jsx'
import Level from '../containers/Level.js'

class Dashboard extends React.Component {
  welcomeMessage() {
    return (
      <div className='row'>
        <div className='welcome col-xs-12'>
          <h3>Welcome to Pttrns!</h3>
          <p>Choose one of our lessons below to get started.</p>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div id='panel' className='dashboard'>
        { this.props.points > 0 ? <Metrics points={this.props.points} profile={this.props.profile} ratio={this.props.ratio} /> : this.welcomeMessage() } 
        <div className='steps row'>
          <div className='col-sm-4'>
            <Level points={this.props.profile.countPoints} title='Counting' link='/counting' operator='c'/>
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.addPoints} title='Addition' link='/addition' operator='+' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.subPoints} title='Subtraction' link='/subtraction' operator='-' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.multiPoints} title='Multiplication' link='/multiplication' operator='x' />
          </div>
          <div className='col-sm-4'>
            <Level points={this.props.profile.divPoints} title='Division' link='/division' operator='/' />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;