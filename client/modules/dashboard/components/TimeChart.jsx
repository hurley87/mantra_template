import d3 from 'd3';
import React from 'react';
import ReactDOM from 'react-dom';
import Dots from './Dots';
import Axis from './Axis';
import Grid from './Grid';
import Tooltip from './ToolTip';
import { _ } from 'lodash';


class TimeChart extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		tooltip:{ display:false,data:{key:'',value:''}},
  		width: 800,
  		height: 300,
  		type: '#'
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
    let data=[];
    let counts = this.props.counting_questions;
    let adds = _.filter(this.props.questions, { 'operator': '+'});
    let subs = _.filter(this.props.questions, { 'operator': '-'});
    let multis = _.filter(this.props.questions, { 'operator': 'x'});
    let divs = _.filter(this.props.questions, { 'operator': '/'});
    let times = [];

    switch(this.state.type) {
    	case '#':
    		times = _.map(counts, function(d,i) {
    			return (d.end_time - d.start_time)/1000
    		});
    		break;
    	case '+': 
    		times = _.map(adds, function(d,i) {
    			return (d.end_time - d.start_time)/1000
    		});
    		break;
    	case '-':
    		times = _.map(subs, function(d,i) {
    			return (d.end_time - d.start_time)/1000
    		});
    		break;
    	case 'x':
    		times = _.map(multis, function(d,i) {
    			return (d.end_time - d.start_time)/1000
    		});
    		break;
    	case "/":
    		times = _.map(divs, function(d,i) {
    			return (d.end_time - d.start_time)/1000
    		});
    		break;
    	default:
    		return null

    }

    for(var i = 1; i < times.length; i++) {
    	data.push({ question: i, time: times[i] })
    }
    
    if(data.length > 20) {
    	data = data.slice(Math.max(data.length - 20, 1))
    }
    

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
        <div className='time-chart'>
        	<div className='row'>
        		<div className={ counts.length <= 4 ? 'hide' : 'col-md-2 col-xs-4'}>
        			<div onClick={this.changeChartType.bind(this, '#')} className={ this.state.type == '#' ? 'chart-type active' : 'chart-type'}>Counting</div>
        		</div>
        		<div className={ adds.length <= 4 ? 'hide' : 'col-md-2 col-xs-4'}>
        			<div onClick={this.changeChartType.bind(this, '+')} className={ this.state.type == '+' ? 'chart-type active' : 'chart-type'}>Addition</div>
        		</div>
        		<div className={ subs.length <= 4 ? 'hide' : 'col-md-2 col-xs-4'}>
        			<div onClick={this.changeChartType.bind(this, '-')} className={ this.state.type == '-' ? 'chart-type active' : 'chart-type'}>Subtraction</div>
        		</div>
        		<div className={ multis.length <= 4 ? 'hide' : 'col-md-2 col-xs-4'}>
        			<div onClick={this.changeChartType.bind(this, 'x')} className={ this.state.type == 'x' ? 'chart-type active' : 'chart-type'}>Mulitplication</div>
        		</div>
        		<div className={ divs.length <= 4 ? 'hide' : 'col-md-2 col-xs-4'}>
        			<div onClick={this.changeChartType.bind(this, '/')} className={ this.state.type == '/' ? 'chart-type active' : 'chart-type'}>Division</div>
        		</div>
        	</div>
          <svg id='awesome' width={this.state.width} height={this.state.height}>
            <g transform={transform}>
              <Grid h={h} grid={yGrid} gridType='y'/>
              <Axis h={h} axis={yAxis} axisType="y" />
              <Axis h={h} axis={xAxis} axisType="x"/>
              <Tooltip tooltip={this.state.tooltip}/>
              <path className="line shadow" d={line(data)} strokeLinecap="round"/>
              <Dots data={data} x={x} y={y} showToolTip={this.showToolTip.bind(this)} hideToolTip={this.hideToolTip.bind(this)}/>
            </g>
          </svg>
        </div>
    );
  }
  changeChartType(type) {
  	this.setState({ type: type });
  }
  showToolTip(evt) {
  	evt.target.setAttribute('fill', '#5188BF');
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