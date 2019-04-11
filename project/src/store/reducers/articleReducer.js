const initState = {
	articles: []
}

const articleReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_ARTICLE': 
			console.log('created project', action.article);
		return state;

		case 'CREATE_ARTICLE_ERROR': 
			console.log('create article error', action.err)
			return state;

		default: 
		return state
	}
}

export default articleReducer