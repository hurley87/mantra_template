import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';

class Grid extends React.Component {
  renderGrid() {
  	let node = ReactDOM.findDOMNode(this);
  	d3.select(node).call(this.props.grid);
  }
  componentDidUpdate() {
  	this.renderGrid();
  }
  componentDidMount() {
  	this.renderGrid();
  }
  render() {
    let translate = "translate(0,"+(this.props.h)+")";
  	return (
  		<g className="y-grid" transform={this.props.gridType=='x'? translate: ""}>
        </g>
  	)
  }
}

export default Grid;