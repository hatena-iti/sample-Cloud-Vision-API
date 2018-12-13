import {connect} from 'react-redux';

import ImagePreviewer from '../components/ImagePreviewer'
import { getAnalyzedResult, inputImage} from "../actions/analyze";

function mapStateToProps(state) {
    return {
        posts: state.posts,
        base64str: state.base64str
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputImage(str){
            dispatch(inputImage(str));
        },
        getAnalyzedResult(base64, key) {
            dispatch(getAnalyzedResult(base64, key));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePreviewer);