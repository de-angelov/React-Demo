import { 
    OPEN_MODAL,
    CLOSE_MODAL,
    UPDATE_URL, 
    ADD_COMMENT,
    ADD_REPLY,
} from './types';

export const updateUrl = (url) => {
    const action = {
        type: UPDATE_URL,
        payload: {
            url: url
        },
    }
    return action;
}

export const addComment = (text) => {
    const action = {
        type: ADD_COMMENT,
        payload: {
            replies:[],
            text,
        }
    }
    return action;
}

export const addReply = (text, postId) => {
    const action = {
        type: ADD_REPLY,
        payload: {
            reply: text,
            postId, 
        }
    }
    return action;
}

export const openModal = () => {
    console.log('open modal action');
    const action = {
        type: OPEN_MODAL,
        payload: {},
    }
    return action;
}

export const closeModal = () => {
    const action = {
        type: CLOSE_MODAL,
        payload: {},
    }
    return action;
};
