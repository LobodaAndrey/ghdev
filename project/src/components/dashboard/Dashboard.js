import React, { Component } from 'react';
import ArticleList from '../articles/ArticleList';
import { connect } from 'react-redux';
import { firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import About from '../About/About'


class Dashboard extends Component {
	render() {
		const { articles } = this.props 

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ArticleList articles={articles}/>
					</div>
					<div className="col s12 m5 offset-m1">
						{/* <BestAuthors /> */}
						<About />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		articles: state.firestore.ordered.articles,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'articles', limit: 20, orderBy: ['createdAt', 'desc']}
	])
)(Dashboard)
