import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./scrollBar.scss');

const propTypes = {
	alwaysShow: PropTypes.bool,
	toc: PropTypes.array.isRequired,
	documentClassName: PropTypes.string.isRequired

};

const defaultProps = {
	alwaysShow: true,
};

class ScrollBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentage: 0,
			currentVal: undefined,
		};

		this.wrapperElem = document.getElementsByClassName(this.props.documentClassName)[0];
		this.getTopOffsets = this.getTopOffsets.bind(this);
		this.scrollEvent = this.scrollEvent.bind(this);
		this.mouseDownEvent = this.mouseDownEvent.bind(this);
		this.mouseMoveEvent = this.mouseMoveEvent.bind(this);
		this.mouseUpEvent = this.mouseUpEvent.bind(this);

		this.topOffsets = this.getTopOffsets(this.props.toc);
	}

	componentDidMount() {
		// const elem = document.getElementsByClassName(this.props.documentClassName)[0];
		this.wrapperElem.addEventListener('scroll', this.scrollEvent);
		document.getElementsByClassName('scroll-bar')[0].addEventListener('mousedown', this.mouseDownEvent);
	}

	componentWillUnmount() {
		// const elem = document.getElementsByClassName(this.props.documentClassName)[0];
		this.wrapperElem.removeEventListener('scroll', this.scrollEvent);
		document.getElementsByClassName('scroll-bar')[0].removeEventListener('mousedown', this.mouseDownEvent);
	}

	getTopOffsets(items) {
		const output = {};
		items.forEach((item)=> {
			const elem = document.getElementById(item.hash);
			if (!elem) { return 0; }
			const top = elem.offsetTop;
			const total = this.wrapperElem.scrollHeight;
			const percentage = top / total * 100;
			// output[item.hash] = `calc(${percentage}% - 6px)`;
			output[item.hash] = percentage;
		});
		return output;
		
	}

	scrollEvent(evt) {
		// console.log('scroll');
		const percentage = this.wrapperElem.scrollTop/(this.wrapperElem.scrollHeight) * 100;
		// console.log(percentage);

		const percentages = this.props.toc.map((item)=> {
			return { ...item, percentage: this.topOffsets[item.hash] }
		}).sort((foo, bar)=> {
			if (foo.percentage > bar.percentage) { return 1; }
			if (foo.percentage < bar.percentage) { return -1; }
			return 0;
		});
		const active = percentages.reduce((prev, curr)=> {
			if (curr.percentage < percentage) { return curr; }
			return prev; 
		}, percentages[0]);
		

		this.setState({ percentage: percentage, currentVal: active.content });

	}

	mouseDownEvent(evt) {
		const topPadding = 56;
		// const elem = document.getElementsByClassName(this.props.documentClassName)[0];
		const clientClick = evt.clientY;
		const clientHeight = document.documentElement.clientHeight;
		const percentage = (clientClick - topPadding) / (clientHeight - topPadding);
		this.wrapperElem.scroll(0, percentage * this.wrapperElem.scrollHeight);
		document.getElementsByClassName('scroll-bar')[0].addEventListener('mousemove', this.mouseMoveEvent);
		document.getElementsByClassName('scroll-bar')[0].addEventListener('mouseup', this.mouseUpEvent);

		// const percentages = this.props.toc.map((item)=> {
		// 	return { ...item, percentage: this.topOffsets[item.hash] }
		// }).sort((foo, bar)=> {
		// 	if (foo.percentage > bar.percentage) { return 1; }
		// 	if (foo.percentage < bar.percentage) { return -1; }
		// 	return 0;
		// });
		// const active = percentages.reduce((prev, curr)=> {
		// 	if (curr.percentage < (percentage * 100)) { return curr; }
		// 	return prev; 
		// }, undefined);
		// console.log(percentage);
		// console.log(percentages);
		// this.setState({ currentVal: active.content });

	}

	mouseMoveEvent(evt) {
		const topPadding = 56;
		// const elem = document.getElementsByClassName(this.props.documentClassName)[0];
		const clientClick = evt.clientY;
		const clientHeight = document.documentElement.clientHeight;
		const percentage = (clientClick - topPadding) / (clientHeight - topPadding);
		this.wrapperElem.scroll(0, percentage * this.wrapperElem.scrollHeight);

		// const percentages = this.props.toc.map((item)=> {
		// 	return { ...item, percentage: this.topOffsets[item.hash] }
		// }).sort((foo, bar)=> {
		// 	if (foo.percentage > bar.percentage) { return 1; }
		// 	if (foo.percentage < bar.percentage) { return -1; }
		// 	return 0;
		// });
		// const active = percentages.reduce((prev, curr)=> {
		// 	if (curr.percentage < (percentage * 100)) { return curr; }
		// 	return prev; 
		// }, undefined);
		// this.setState({ currentVal: active.content });
	}

	mouseUpEvent(evt) {
		document.getElementsByClassName('scroll-bar')[0].removeEventListener('mousemove', this.mouseMoveEvent);
		document.getElementsByClassName('scroll-bar')[0].removeEventListener('mouseup', this.mouseUpEvent);
	}
	
	render() {
		return (
			<div className={'scroll-bar'}>
				<div className={'position'} style={{ top: `${this.state.percentage}%`}} />
				<div className={'bar'} style={{ top: `${this.state.percentage}%`}}>
					<div className={'current'}>{this.state.currentVal}</div>
				</div>

				{this.props.toc.map((item)=> {
					return (
						<div className={`tab ${item.tagName === 'h1' ? 'h1' : 'h2'}`} key={item.hash} style={{ top: `calc(${this.topOffsets[item.hash]}% - 6px)` }}>
							{item.content}
						</div>
					);
				})}
				
			</div>
		);
	}
};

ScrollBar.defaultProps = defaultProps;
ScrollBar.propTypes = propTypes;
export default ScrollBar;