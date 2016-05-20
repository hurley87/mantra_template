import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import Dots from './Dots';
import Axis from './Axis';
import Grid from './Grid';
import Tooltip from './ToolTip';


class TimeChart extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		tooltip:{ display:false,data:{key:'',value:''}},
  		width: 800,
  		height: 300
  	}
  }
  componentWillMount() {
  	let _self = this;
  	window.onresize = function(){ 
  		_self.updateSize();
  	}
  }
  componentDidMount() {
  	this.setState({width:1200});
  	this.updateSize();
  }
  componentWillUnmount() {
  	window.offresize = function(){ return null; }
  }
  updateSize() {
  	let node = ReactDOM.findDOMNode(this);
  	let parentWidth = node.clientWidth;
  	if(parentWidth < 1200){
        this.setState({width: parentWidth });
    }else{
        this.setState({ width: 1200});
    }
  }
  render() {
    let data=[
        {question:1,time:180},
        {question:2,time:250},
        {question:3,time:150},
        {question:4,time:150}
    ];

    data.pop();

    let margin = {top: 15, right: 50, bottom: 20, left: 50},
        w = this.state.width - (margin.left + margin.right),
        h = this.state.height - (margin.top + margin.bottom);

    let x = d3.scale.linear()
        .domain(d3.extent(data, function (d) {
            return d.question;
        }))
        .rangeRound([0, w]);

    let y = d3.scale.linear()
        .domain([0,d3.max(data,function(d){
            return d.time;
        })])
        .range([h, 0]);

    let line = d3.svg.line()
        .x(function (d) {
            return x(d.question);
        })
        .y(function (d) {
            return y(d.time);
        }).interpolate('cardinal');

    let transform='translate(' + margin.left + ',' + margin.top + ')';

		let yAxis = d3.svg.axis()
		            .scale(y)
		            .orient('left')
		            .ticks(5);
		 
		let xAxis = d3.svg.axis()
		   .scale(x)
		   .orient('bottom')
		   .tickValues(data.map(function(d,i){
		       if(i>0)
		           return d.question;
		   }).splice(1))
		   .ticks(4);
		 
		let yGrid = d3.svg.axis()
		   .scale(y)
		   .orient('left')
		   .ticks(5)
		   .tickSize(-w, 0, 0)
		   .tickFormat("");

    return (
        <div>
          <svg id='awesome' width={this.state.width} height={this.state.height}>
            <g transform={transform}>
              <path className="line shadow" d={line(data)} strokeLinecap="round"/>
              <Dots data={data} x={x} y={y} showToolTip={this.showToolTip.bind(this)} hideToolTip={this.hideToolTip.bind(this)}/>
              <Grid h={h} grid={yGrid} gridType='y'/>
              <Axis h={h} axis={yAxis} axisType="y" />
              <Axis h={h} axis={xAxis} axisType="x"/>
              <Tooltip tooltip={this.state.tooltip}/>
            </g>
          </svg>
        </div>
    );
  }
  showToolTip(evt) {
  	evt.target.setAttribute('fill', '#000');
  	console.log(evt.target);
    this.setState({tooltip:{
        display:true,
        data: {
            key:evt.target.getAttribute('data-key'),
            value:evt.target.getAttribute('data-value')
            },
        pos:{
            x:evt.target.getAttribute('cx'),
            y:evt.target.getAttribute('cy')
        }
 
        }
    });
  }
  hideToolTip(evt) {
    evt.target.setAttribute('fill', '#7dc7f4');
    this.setState( {tooltip:{ display:false,data:{key:'',value:''}}});
  }
}

export default TimeChart;