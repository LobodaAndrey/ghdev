import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

const ArticleDetails = (props) => {
	const {article, auth} = props;
		if (!auth.uid) { return <Redirect to='/signin' />}

	if (article) {
		return (
		<div className="container section article-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">
						{article.title}
					</span>
					<p>{article.content}</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>
						Автор: {article.authorLogin}
					</div>
					<div>{article.createdAt.toDate().toLocaleString("ru")}</div>
				</div>
			</div>
		</div>
		)
	}
	else {
		return (
			<div className="container center">
				<p>Загрузка...</p>
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	const {id} = ownProps.match.params
	const {articles} = state.firestore.data
	const article = articles ? articles[id] : null

	return {
		article: article,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'articles'}
	])
)(ArticleDetails)
