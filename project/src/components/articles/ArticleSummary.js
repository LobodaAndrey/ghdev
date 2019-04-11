import React from 'react'

const ArticleSummary = ({article}) => {
	return (
		<div className="card z-depth-0 article-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{article.title}</span>
				<p>Автор:{ article.authorLogin}</p>
				<p className="grey-text"> {article.createdAt.toDate().toLocaleString("ru")}</p>
			</div>
		</div>
	)
}


export default ArticleSummary