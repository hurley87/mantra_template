import d3 from 'd3';
import React from 'react';

class Dots extends React.Component {
  render() {
    let circles = this.props.data.map((d,i) => (
        	<circle className="dot" r="7" cx={this.props.x(d.question)} cy={this.props.y(d.time)} 
        	fill="#5188BF" stroke="#56D0B3" strokeWidth="3px" key={i}
        	onMouseOver={this.props.showToolTip} onMouseOut={this.props.hideToolTip} 
        	data-key={d.question} data-value={d.time}
        	/>	
    	));
    return(
        <g>
            {circles}
        </g>
    );
  }
}

export default Dots;