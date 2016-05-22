import d3 from 'd3';
import React from 'react';

class Tooltip extends React.Component {
	render(){
	    let visibility="hidden";
	    let transform="";
	    let x=0;
	    let y=0;
	    let width=100,height=100;
	    let transformText='translate('+width/2+',0)';
	    let transformArrow="";
	    let questionData = this.props.tooltip.data.question;
	    let question = '';

	    if(questionData.operator == 'c') {
	    	question = questionData.num1 + " " + questionData.num2 + " " + questionData.num3;
	    } else {
	    	if(questionData.num1 < questionData.num2) {
	    		question = questionData.num2 + " " + questionData.operator + " " + questionData.num1;
	    	} else {
	    		question = questionData.num1 + " " + questionData.operator + " " + questionData.num2;
	    	}
	    }

	    if(questionData.operator == '/') {
	    	question = questionData.num1*questionData.num2 + " " + questionData.operator + " " + questionData.num2;
	    }

	    if(this.props.tooltip.display==true){
	        var position = this.props.tooltip.pos;

	        x= position.x;
	        y= position.y;
	        visibility="visible";


	        if(y>height){
	            transform='translate(' + (x-width/2) + ',' + (y-height-20) + ')';
	            transformArrow='translate('+(width/2-20)+','+(height-2)+')';
	        }else if(y<height){

	            transform='translate(' + (x-width/2) + ',' + (Math.round(y)+20) + ')';
	            transformArrow='translate('+(width/2-20)+','+0+') rotate(180,20,0)';
	        }

	    }else{
	        visibility="hidden"
	    }

	    return (
	        <g transform={transform}>
	            <rect class="shadow" is width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#5188BF"/>
	            <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
	                     fill="#5188BF" visibility={visibility}/>
	            <text is visibility={visibility} transform={transformText}>
	            	<tspan is x="0" text-anchor="middle" dy="15" font-size="13px" fill="#a9f3ff">{'Q: ' + question }</tspan>
	            	<tspan is x="0" text-anchor="middle" dy="23" font-size="13px" fill="#a9f3ff">{'Guess: ' + questionData.guess }</tspan>
	            	<tspan is x="0" text-anchor="middle" dy="25" font-size="13px" fill="#a9f3ff">{'Answer: ' + questionData.answer }</tspan>
	                <tspan is x="0" text-anchor="middle" dy="26" font-size="13px" fill="#a9f3ff">{questionData.time + " seconds"}</tspan>
	            </text>
	        </g>
	    );
	}
}

export default Tooltip;