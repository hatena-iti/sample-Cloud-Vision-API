import {
    POST_ANALYZE_REQUEST, POST_ANALYZE_SUCCESS, POST_ANALYZE_FAILURE
} from '../actions/analyze'


const initialState = {
    isFetching: false,
    posts:''
};

export default function analyzeReducer(state = initialState, action) {

    switch (action.type) {
        case 'POST_ANALYZE_REQUEST':
           return {
               ...state,
               isFetching: true,
               posts: 'リクエスト開始'
           };
        case 'POST_ANALYZE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                posts: JSON.stringify(action.posts, null, '\t')
            };
        case 'POST_ANALYZE_FAILURE':
            return {
                ...state,
                isFetching: false,
                posts: JSON.stringify(action.posts.response.data.error)
            };
        default:
            return state;
    }
}