import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';

class Axis extends React.Component {
  renderAxis() {
  	let node = ReactDOM.findDOMNode(this);
  	d3.select(node).call(this.props.axis);
  }
  componentDidUpdate() {
  	this.renderAxis();
  }
  componentDidMount() {
  	this.renderAxis();
  }
  render() {
    let translate = "translate(0,"+(this.props.h)+")";
  	return (
  		<g className="axis" transform={this.props.axisType=='x' ? translate : ""} >
        </g>
  	)
  }
}

export default Axis;