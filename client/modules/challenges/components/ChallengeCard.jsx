import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, Well } from 'react-bootstrap';

class ChallengeCard extends React.Component { 
  status(challenge){
  	let msg = 'New'
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
    	<a className="button" href={"/challenges/" + challenge._id}>
        {challenge.challenge.reward}
        <span className='pull-right'>{this.status(challenge)}</span>
      </a>
    )
  }
}

export default ChallengeCard;