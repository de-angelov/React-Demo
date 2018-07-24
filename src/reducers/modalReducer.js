import {
	OPEN_MODAL,
	CLOSE_MODAL,
	UPDATE_URL,
	ADD_COMMENT,
	ADD_REPLY
} from '../actions/types';

const initialState = {
	isModalOpen: false,
	url: '',
	comments: [],
}

const updateCommentReplies = (comment, i, action) => {
	const updatedCommentReplies = 
	i === +action.payload.postId ? 
	{ text: comment.text, replies: [...comment.replies, action.payload.reply] } : 
	comment;
	return updatedCommentReplies;
}

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_URL:
			let url = action.payload.url;
			// url = url.replace('watch?v=', 'embed/');
			if(url!==''){
				return {
					...state,
					isModalOpen: true,
					url,
				}
			}else{
				return {
					...state,
					isModalOpen: false,
					url,
				}
			}
			
		case ADD_COMMENT:
			const comment = {
				text: action.payload.text,
				replies: action.payload.replies
			}
			const updatedComments = [...state.comments, comment];
			return {
				...state,
				comments: updatedComments,
			}
		case ADD_REPLY:
			// const id = action.payload.postId;
			const updatedReplies = 
			state.comments.map((comment, i) => updateCommentReplies(comment, i, action));
			return {
				...state,
				comments: updatedReplies,
			};
		case OPEN_MODAL:
			return {
				...state,
				isModalOpen: true,
			};
		case CLOSE_MODAL:
			return {
				...state,
				isModalOpen: false,
			};
		default:
			return state;
	}
}

