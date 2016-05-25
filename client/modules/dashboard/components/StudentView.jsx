import React from 'react';
import Dashboard from './dashboard.jsx';
import Header from '../containers/header.js';

class StudentView extends React.Component {
  render() {
  	console.log(this.props.profile)
    return (
    	<div>
    		<Header title={this.props.profile.name}/>
    		<Dashboard points={this.props.points} profile={this.props.profile} ratio={this.props.ratio} />
    	</div>
    )
  }
}

export default StudentView;