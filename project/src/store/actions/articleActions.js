export const createArticle = (article) => {
	return  (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;

		firestore.collection('articles').add({
			...article,
			authorLogin: profile.nickname,
			authorId: authorId,
			createdAt: new Date()
		}).then(() => {
			dispatch( {type: 'CREATE_ARTICLE', article})
		}).catch((err) => {
			dispatch({ type: 'CREATE_ARTICLE_ERROR', err})
		})
	} 
};