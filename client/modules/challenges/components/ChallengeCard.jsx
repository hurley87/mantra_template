import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon, Grid, Row, Well } from 'react-bootstrap';

class ChallengeCard extends React.Component { 
  render() {
    const challenge = this.props.challenge;
    return (
    	<Well bsSize="large">
		<div className="card card-block">
		  <h4 className="card-title">
		  	{challenge.challenge.reward} <small> Answer {challenge.challenge.right} questions in  {challenge.challenge.time} seconds.</small> 
		  	<small><a className="card-link pull-right" href={"/challenges/" + challenge._id}>View Challenge</a></small> 
		  </h4>
		</div>
		</Well>
    )
  }
}

export default ChallengeCard;