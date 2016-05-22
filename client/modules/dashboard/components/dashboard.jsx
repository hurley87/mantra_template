import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Metrics from './metrics';
import Level from '../containers/Level';
import TimeChart from '../containers/TimeChart';

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
  statsMessage() {
    return(
      <div className='row'>
        <div className='welcome col-xs-12'>
          <h3>It's all a matter of time.</h3>
          <p>Track your performance over time.</p>
        </div>
      </div>
    )
  }
  metricsMessage() {
    return(
      <div className='row'>
      <div className='welcome col-xs-12'>
        <h3>Overall Statistics</h3>
        <p>Explain why overall statics are important.</p>
      </div>
      </div>
    )
  }
  lessonsMessage() {
    return(
      <div className='row'>
        <div className='welcome col-xs-12'>
          <h3>Continue your exercises</h3>
          <p>Explain why exercises are important.</p>
        </div>
      </div>
    )
  }
  metrics() {
    return (
      <div>
        { this.metricsMessage() }
        <Metrics points={this.props.points} profile={this.props.profile} ratio={this.props.ratio} /> 
      </div>
    )
  }
  exercises() {
    return (
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
    )
  }
  render() {
    return (
      <div id='panel' className='dashboard'>
        { this.props.points > 10 ? this.statsMessage() : null }
        { this.props.points > 10 ? <TimeChart /> : null }
        { this.props.points > 0 ? this.metrics() : this.welcomeMessage() } 
        { this.props.points > 0 ? this.lessonsMessage() : null } 
        { this.exercises() }
      </div>
    )
  }
}

export default Dashboard;