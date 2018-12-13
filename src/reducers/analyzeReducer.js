import {
    POST_ANALYZE_REQUEST, POST_ANALYZE_SUCCESS, POST_ANALYZE_FAILURE
} from '../actions/analyze'


const initialState = {
    isFetching: false,
    base64str:'',
    posts:''
};

export default function analyzeReducer(state = initialState, action) {

    switch (action.type) {
        case 'INPUT_IMAGE':
            return {
                ...state,
                base64str: action.base64str
            };
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
                posts: JSON.stringify(action.posts)
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