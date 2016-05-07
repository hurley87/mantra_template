import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Dashboard extends React.Component {
  render() {
    return (
      <div id='panel' className='dashboard'>
        <div className="metrics clearfix">
          <div className="metric">
            <span className="field">Points</span>
            <span className="data">{this.props.points}</span>
          </div>
          <div className="metric">
            <span className="field">Right</span>
            <span className="data">{this.props.profile.right}</span>
          </div>
          <div className="metric">
            <span className="field">Wrong</span>
            <span className="data">{this.props.profile.wrong}</span>
          </div>
          <div className="metric">
            <span className="field">Ratio</span>
            <span className="data">{this.props.ratio}</span>
          </div>
        </div>
        <div className='steps'>
          <div className='step'>
            <div className='info'>
              <span className='number'>{this.props.profile.addPoints} <i className="fa fa-heart"></i></span>
              Addition
            </div> 
            <a href='/addition' className='button'> Start </a> 
          </div>
          <div className='step'>
            <div className='info'>
              <span className='number'>{this.props.profile.subPoints} <i className="fa fa-heart"></i></span>
              Subtraction
            </div>  
            <a href='/subtraction' className='button'> Start </a> 
          </div>
          <div className='step'>
            <div className='info'>
              <span className='number'>{this.props.profile.multiPoints} <i className="fa fa-heart"></i></span>
              Multiplication
            </div> 
            <a href='/multiplication' className='button'> Start </a> 
          </div>
          <div className='step'>
            <div className='info'>
              <span className='number'>{this.props.profile.divPoints} <i className="fa fa-heart"></i></span>
              Division
            </div> 
            <a href='/division' className='button'> Start </a> 
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;