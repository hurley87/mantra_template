import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class Video extends React.Component {
  render() {
    return (
      <div className="video-wrapper">
        <div className="info">
          <div className="name">Lesson 1</div>
          <div className="last-update">
            <img src="http://lorempixel.com/1000/600/abstract" />
          </div>
        </div>
      </div>
    )
  }
}

export default Video;