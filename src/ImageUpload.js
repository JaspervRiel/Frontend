import React from 'react'
import {useState} from 'react'
function ImageUpload(){
    var imagesstring = ""
    const clickpreviewImage= async (e)=>{
        console.log(e.target.files)
        const file = e.target.files[0]
        var base64 =  Base64convert(file);
        await base64.then(function(result){
            imagesstring = result
        })
        console.log(imagesstring)
        
    }

    const clickUploadImage =()=>{   
        console.log("clicked button")
         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
        
         var raw = JSON.stringify({
           "image": imagesstring,
           "bio": "test",
           "user": {
            "id": 1
          }

         })
        
         var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
         };
        
         fetch("http://localhost:8080/createImage", requestOptions)
           .then(response => response.text())  
        }
        const Base64convert=(file)=>{
            return new Promise((resolve,reject)=>{
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
    
                fileReader.onload=()=>{
                    resolve(fileReader.result.split(',')[1]);
                };
    
                fileReader.onerror=(error)=>{
                    reject(error)
                };
    
            })
    
        }
return(
    <form>
        <label for="commentText">pick a file</label>
        <input type="file" id="imageFile" onChange={(e)=>clickpreviewImage(e)}/>
        <button type='button' id="buttonClick" onClick={clickUploadImage}>place Image</button>
    </form>  )
}
export default ImageUpload