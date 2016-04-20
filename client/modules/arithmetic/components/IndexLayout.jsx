import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';

class IndexLayout extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="sidebar-toggler visible-xs">
          <i className="ion-navicon"></i>
        </div>
        <div className="header">
          {this.props.title}
        </div>
        <div className="steps">
          <div className="step done">
            <div className="info">
              <span className="number">
                <i className="ion-checkmark-circled"></i>
              </span> 
              This is an example of a module that has been completed
            </div>
            <a href="#" className="disabled button">
              <span>Start</span>
            </a>
          </div>
          {
            this.props.questions.map((question, index) => (
              <div key={question._id} className="step">
                <div className="info">
                  <span className="number">{index + 1}</span> 
                  {question.title}
                </div>

                <a href={`/question/${question._id}`} className="button">
                  <span>Start</span>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default IndexLayout;