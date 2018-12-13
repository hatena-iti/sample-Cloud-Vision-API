
import React from 'react';
import '../App.css';

export default function ImagePreviewer({ base64str,posts, getAnalyzedResult}){

    const request = (e) => {
        const file = e.target.files[0];
        const fr = new FileReader();

        fr.readAsDataURL(file);
        fr.onloadend = () => {
            const imgNode = document.getElementById("image1");
            imgNode.src = fr.result;

            let base64str = fr.result.replace( /data:.*\/.*;base64,/ , "" );
            document.getElementById("img-base64").innerHTML = base64str;
            let key = document.getElementById("key").value;
            console.log(key);
            getAnalyzedResult(base64str, key);
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


