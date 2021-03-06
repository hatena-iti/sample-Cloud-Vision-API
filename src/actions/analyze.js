import axios from 'axios'


export const INPUT_IMAGE = 'INPUT_IMAGE'
export const inputImg = (str) => {
    return {
        type: INPUT_IMAGE,
        base64str: str
    }
}

export const POST_ANALYZE_REQUEST = 'POST_ANALYZE_REQUEST'
const postAnalyzeRequest = () => {
    return {
        type: POST_ANALYZE_REQUEST,
    }
};

export const POST_ANALYZE_SUCCESS = 'POST_ANALYZE_SUCCESS'
const postAnalyzeSuccess = (json) => {
    return {
        type: POST_ANALYZE_SUCCESS,
        posts: json
    }
};

export const POST_ANALYZE_FAILURE = 'POST_ANALYZE_FAILURE'
const postAnalyzeFailure = (error) => {
    return {
        type: POST_ANALYZE_FAILURE,
        posts: error
    }
};


export const inputImage = (base64) => {
    return (dispatch) => {
        dispatch(inputImg(base64))
    }
}

export const getAnalyzedResult = (base64, key) => {
    return (dispatch) => {
        dispatch(postAnalyzeRequest());
        return axios.post('https://vision.googleapis.com/v1/images:annotate?key=' + key,
            {
                "requests": [
                    {
                        "image":{
                            "content":base64},
                        "features":[
                            {
                                "type":"LABEL_DETECTION",
                                "maxResults":10
                            }
                        ]
                    }
                ]
            })
            .then(res =>
                dispatch(postAnalyzeSuccess(res.data))
            ).catch(err =>
                dispatch(postAnalyzeFailure(err))
            )
    }
};