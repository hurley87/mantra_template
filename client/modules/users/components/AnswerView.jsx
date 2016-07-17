import React from 'react';
import { Col, Row, Grid, Input, ButtonInput} from 'react-bootstrap';
import { Form, ValidatedInput } from 'react-bootstrap-validation';


class AnswerView extends React.Component {
  render () {
    const answer = this.props.answer[0];
    const submissions = answer.submissions;
    return (
      <div id='signup'>
        <Grid>
        	<h3><a href='/tracker'>Back</a></h3>
        	<p>Final Time: {answer.finalTime}</p>
        	<p>Time Taken: {answer.timeTaken}</p>
        	<p>Max: {answer.max}</p>
        	<p>Min: {answer.min}</p>
        	<p>Operator: {answer.operator}</p>
        	<p>Right: {answer.right}</p>
        	<p>Wrong: {answer.wrong}</p>
        	<p>Winning Number: {answer.winningThreshold}</p>
        	<p>Winner: {answer.winner ? <span>winner</span> : <span>did not win</span>}</p>
        	<h1>Submissions</h1>
        	{

        		submissions.map((submission, index) => {
        			return (
        				<Row key={index}>
        					<Col sm={12}>
        						{ submission.num1 } { submission.operator} {submission.num2} = {submission.guess} 
        						 <small> (answer is {submission.answer})</small>
        					</Col>
        				</Row>
        			)
        		})
        	}
        </Grid>
      </div>
    )
  }
}

export default AnswerView;