import React from 'react';
import {useState} from 'react'
import './feeds.css'
function Feeds(){
const [imageList, setimageList] = useState([])
fetch('http://localhost:8080/getImage').then(response => response.json())
.then(json => setimageList(json));


        return (
            <div className='container'>
                {imageList.map(items =>{
                    const srcString = "data:image/png;base64," + items.image;
                    return(
                        <div className="div-feed">
                            <div className='author'>{items.user.firstName}</div>
                            <div className="image">
                              <img src={srcString} alt='error'/>
                            </div>
                            <div className='div-comments'>
                                
                            </div>
                        </div>
                    )
                } )}
            </div>
            
        );
}
 
export default Feeds;