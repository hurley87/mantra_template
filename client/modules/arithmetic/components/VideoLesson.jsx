import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import Video from '../../dashboard/components/video.jsx';



class VideoLesson extends React.Component {
  render() {
    return (
    	<div className={ this.props.toggle ? 'show-menu content-wrapper' : 'hide-menu content-wrapper' }>
        	<div className="sidebar-toggler visible-xs" onClick={this.props.showMenu}>
          		<i className="ion-navicon"></i>
        	</div>
        	
        	<div className="header">
           		Video Lesson <a href='/profile'><span className='pull-right'> <i className="fa fa-heart"></i></span></a>
        	</div>

          <Video  />

      	</div>
    )
  }
}

export default VideoLesson;