import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Metrics extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Metrics;