import {connect} from 'react-redux';

import ImagePreviewer from '../components/ImagePreviewer'
import { getAnalyzedResult} from "../actions/analyze";

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAnalyzedResult(base64, key) {
            dispatch(getAnalyzedResult(base64, key));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagePreviewer);