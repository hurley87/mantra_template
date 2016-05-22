import d3 from 'd3';
import React from 'react';

class Dots extends React.Component {
  render() {
    let circles = this.props.data.map((d,i) => (
        	<circle className="dot" r="7" cx={this.props.x(d.question)} cy={this.props.y(d.time)} 
        	fill={ d.isRight ? "#56D0B3" : '#e74c3c'} stroke={ d.isRight ? "#56D0B3" : '#e74c3c'} strokeWidth="3px" key={i}
        	onMouseOver={this.props.showToolTip} onMouseOut={this.props.hideToolTip} 
        	data-time={d.time} data-num1={d.num1} data-num2={d.num2} data-num3={d.num3} data-operator={d.operator}
            data-guess={d.guess} data-answer={d.answer}
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