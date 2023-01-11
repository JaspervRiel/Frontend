import React from 'react'
import {useState} from 'react'
function UploadComennt() {
    const [CommentText, setCommentText] = useState("")
    
    const handleClick=async(e)=>{
        console.log(CommentText)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "commentText": CommentText,
        "image": {
            "id": 1
        },
        "user": {
            "id": 1
        }
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/CreateComment/", requestOptions)
        

    }
    return (<form>
        <label for="commentText">Comment:</label>
        <input type="text" id="commentText" placeholder='Comment here' onChange={(e)=>setCommentText(e.target.value)}/>
        <button type='button' id="buttonClick" onClick={handleClick}>Place Comment</button>
    </form>  );
}

export default UploadComennt;