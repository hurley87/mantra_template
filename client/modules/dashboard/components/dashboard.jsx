import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Dashboard extends React.Component {
  render() {
    return (
      <div id='panel' className='dashboard'>
        <h3>Dashboard</h3>
        <div className="metrics clearfix">
          <div className="metric">
            <span className="field">Points</span>
            <span className="data">{this.props.points}</span>
          </div>
          <div className="metric">
            <span className="field">Right</span>
            <span className="data">{this.props.right}</span>
          </div>
          <div className="metric">
            <span className="field">Wrong</span>
            <span className="data">{this.props.wrong}</span>
          </div>
          <div className="metric">
            <span className="field">Ratio</span>
            <span className="data">{this.props.ratio}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;