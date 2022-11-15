import React, { useState } from 'react'

function Cloudinary() {
const [file,setFile] = useState("")

const handleChange = (e) => {
    console.log(e.target.file[0]);
    // setFile(e.target.file)
}

const handleSubmit = () => {

}

  return (
    <>
        <form onSubmit={e=> handleSubmit(e)}>
            <label htmlfor="fileInput">Upload</label>
            <input type="file" id="fileInput" onChange={e=> handleChange(e)} required
            accpet="image/png, image/jpg, image/jpg, image/jfif" />
            <button className='text-xl bg-blue-700'>Submit</button>
        </form>
    </>
  )
}

export default Cloudinary