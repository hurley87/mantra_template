import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, Well } from 'react-bootstrap';

class ChallengeCard extends React.Component { 
  status(challenge){
  	let msg = 'New'
    console.log(challenge)
  	if(challenge.complete) {
  		msg = 'Complete'
  	} else if(challenge.pending) {
  		msg = 'Pending'
  	} else if(challenge.attempted) {
  		msg = 'Attempted'
  	} 
  	return (
  		<div>
  			{msg}
  		</div>
  	)
  }
  render() {
    const challenge = this.props.challenge;
    return (
    	<a className="card-link" href={"/challenges/" + challenge._id}><Well bsSize="large">
		<div className="card card-block">
		  <h4 className="card-title">
		  	{challenge.challenge.reward} <small> Answer {challenge.challenge.right} questions in  {challenge.challenge.time} seconds.</small> 
		  	<small>{this.status(challenge)}</small> 
		  </h4>
		</div>
		</Well></a>
    )
  }
}

export default ChallengeCard;