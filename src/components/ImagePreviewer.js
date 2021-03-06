
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export default function ImagePreviewer({base64str,posts, getAnalyzedResult, inputImage}){

    const request = (e) => {
        const file = e.target.files[0];
        const fr = new FileReader();

        fr.readAsDataURL(file);
        fr.onloadend = () => {
            const imgNode = document.getElementById("image1");
            imgNode.src = fr.result;
            let base64 = fr.result.replace( /data:.*\/.*;base64,/ , "" );
            let key = document.getElementById("key").value;
            inputImage(base64);
            getAnalyzedResult(base64, key);
        }
    }
    return (
        <div>
            <div class="keyArea">
                <textarea id="key"></textarea>keyを入れてね
            </div>
            <input type="file" accept="image/*" onChange={request} />
            <img id="image1" src="" />
            <div class="analyze-area">
                <div class="base64Area"><p id="img-base64">{base64str}</p></div>
                <div class="resArea"><p id="img-analyzed">{posts}</p></div>
            </div>
        </div>
    );
}

/*ImagePreviewer.defaultProps = {
    base64str: 'default props base64str',
    posts: 'default props posts'
};

ImagePreviewer.Proptypes = {
    base64str: PropTypes.string,
    posts: PropTypes.string,
    getAnalyzedResult: PropTypes.func,
};*/

