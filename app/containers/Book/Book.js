/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
// import { Collapse } from '@blueprintjs/core';
import { Editor } from '@pubpub/editor';
import HighlightMenu from '@pubpub/editor/addons/HighlightMenu';
import Image from '@pubpub/editor/addons/Image';
import ScrollBar from 'components/ScrollBarAddon/ScrollBarAddon';
import DiscussionAddon from 'components/DiscussionAddon/DiscussionAddon';
// import EssaysContent from 'components/EssaysContent/EssaysContent';
// import IntroContent from 'components/IntroContent/IntroContent';
import { s3Upload, getResizedUrl } from 'utilities';

const bookContent = require('bookSourceEditor.json');
const introContent = require('introSourceEditor.json');
require('./book.scss');

const propTypes = {
	location: PropTypes.object.isRequired,
	lensesData: PropTypes.object.isRequired,
};

const contextTypes = {
	router: PropTypes.object,
	store: PropTypes.object,
};

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			introOpen: false,
			// essaysOpen: false,
		};
		// this.toggleEssaysOpen = this.toggleEssaysOpen.bind(this);
		this.toggleIntroOpen = this.toggleIntroOpen.bind(this);
	}
	// toggleEssaysOpen() {
	// 	this.setState({ essaysOpen: !this.state.essaysOpen });
	// }
	toggleIntroOpen() {
		this.setState({ introOpen: !this.state.introOpen });
	}
	render() {
		const lensesData = this.props.lensesData.data || [];
		const queryObject = queryString.parse(this.props.location.search);
		const highlights = [];
		if (queryObject.from && queryObject.to) {
			highlights.push({
				from: queryObject.from,
				to: queryObject.to,
				version: 'permanent',
				id: '00',
				permanent: true,
			});
		}
		const scrollToFocus = ()=> {
			setTimeout(()=> {
				const focus = document.getElementsByClassName('permanent')[0];
				if (queryObject.to && queryObject.from && !focus) {
					scrollToFocus();
				}
				if (focus) {
					document.getElementsByClassName('book-wrapper')[0].scrollTop = focus.getBoundingClientRect().top - 75;
				}
			}, 100);
		};

		const renderContent = this.state.introOpen
			? {
				...bookContent,
				content: [
					...introContent.content,
					...bookContent.content,
				]
			}
			: bookContent;
		return (
			<div className={'book'}>
				<style>
					{lensesData.map((lens)=> {
						return `.pt-tag.${lens.slug} { background-color: ${lens.color}; } `;
					})}
				</style>

				<div className={'book-wrapper'}>
					<div className={'container'}>
						<div className={'row'}>
							<div className={'col-12 intro-content'}>
								<div className={'subtitle'}>A collaborative reading experiment with Mary Shelley’s classic novel.</div>
							</div>
						</div>
					</div>

					<div className={'book-content'}>
						{/* Main Frankenstein Book Image */}
						<img src="images/cover.jpg" alt="Frankenstein cover" />

						{/* Collapsable section for introduction material */}
						<div className={'collapsable-section'}>
							<button className={'pt-button pt-fill pt-large'} onClick={this.toggleIntroOpen}>
								{this.state.introOpen ? 'Hide' : 'Show'} Front Matter
							</button>
							{/*<Collapse isOpen={this.state.introOpen}>
								<IntroContent />
							</Collapse>*/}
						</div>

						{/* Book content */}
						<Editor
							initialContent={renderContent}
							isReadOnly={true}
							key={`edtior-${this.state.introOpen}`}
							ref={scrollToFocus}
						>
							<ScrollBar toc={this.toc} documentClassName={'book-wrapper'} />
							<Image
								handleFileUpload={s3Upload}
								handleResizeUrl={(url)=> { return getResizedUrl(url, 'fit-in', '800x0'); }}
							/>
							<DiscussionAddon
								routerContext={this.context.router}
								storeContext={this.context.store}
							/>
							<HighlightMenu
								highlights={highlights}
								primaryEditorClassName={'book-content'}
								hoverBackgroundColor={'aqua'}
							/>
						</Editor>

						{/* Collapsable section for essay material */}
						{/*<div className={'collapsable-section bottom'}>
							<button className={'pt-button pt-fill pt-large'} onClick={this.toggleEssaysOpen}>
								{this.state.essaysOpen ? 'Hide' : 'Show'} Essays
							</button>
							<Collapse isOpen={this.state.essaysOpen}>
								<EssaysContent />
							</Collapse>
						</div>*/}
					</div>

				</div>
			</div>

		);
	}
}

Book.propTypes = propTypes;
Book.contextTypes = contextTypes;
export default withRouter(connect(state => ({
	lensesData: state.lenses,
}))(Book));
