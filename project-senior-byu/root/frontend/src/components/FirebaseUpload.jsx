import React, {useState} from 'react'
import {storage} from '../firebase/firebase'

const FirebaseUpload = () => {

    const [imageUpload, setImageUpload] = useState(null)
    const handleUpload = () => {
        if(imageUpload === null) return;


    }
  return (
    <div>
        <input type="file" onChange={(event)=>{
            setImageUpload(event.target.files)
        }}/>
        <button onClick={handleUpload}> Upload Image</button>
    </div>
  )
}

export default FirebaseUpload