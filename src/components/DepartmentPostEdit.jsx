// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// const apiKey = "899559323825165";
// const cloudName = "dd5csvtjc";



// function DepartmentPostEdit() {
//   const formData = new FormData();
//   const [img, setImg] = useState();
//   const [selectedImg, setSelectedImg] = useState();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   // const onSubmit1 = (data) => console.log(data);
  
//   const getImg = async () => {
//     await axios
//       .post("https://api.cloudinary.com/v1_1/dd5csvtjc/image/upload", formData)
//       .then((res) => setSelectedImg(res.data.secure_url))
//       .then()
//   };
//   const onSubmit2 = async (data) => {
//     getImg().then((res) => { alert(res.data.message) })
//     axios.post('http://localhost:5000/departments/department-edit', {
//       "department":data.department,
//       "title":data.title,
//       "description":data.description,
//       "date": new Date(),
//       "image": selectedImg.image
//     })
//     console.log(errors);
//     console.log(selectedImg);
//   };
  
//   useEffect( async () => {
//     await formData.append("file", img);
//     await formData.append("upload_preset", "rtdh7xyk");
//     onSubmit2();
    
//   }, [img]);



//   return (
//     <div className="bg-gray-900 min-h-screen mt-24 w-screen">
//       <div className=" flex justify-center space-x-7 ">
//         <form
//           onSubmit={handleSubmit(onSubmit2)}
//           className="flex justify-center flex-col text-3xl  bg-white m-16 p-5"
//         >
//           <h1 className="text-center text-3xl">הוספת אירוע</h1>
//           <label
//             htmlFor=""
//             className="flex  text-blue-900 text-sm font-semibold "
//           >
//             אגף
//           </label>
//           <input
//             className=" flex h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline md:w-72 lg:w-96 w-72  mb-6"
//             type="text"
//             placeholder="אגף"
//           />
//           <label
//             htmlFor=""
//             className="flex  text-blue-900 text-sm font-semibold "
//           >
//             כותרת
//           </label>
//           <input
//             className=" flex h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline md:w-72 lg:w-96 w-72  mb-6"
//             type="text"
//             placeholder="כותרת"
//             {...register("Title", { required: true, pattern: /"[A-Za-z]+"/i })}
//           />
//           <label
//             htmlFor=""
//             className="flex  text-blue-900 text-sm font-semibold "
//           >
//             מלל
//           </label>
//           <textarea type="text" placeholder="מלל" {...register} />
//           <label
//             htmlFor=""
//             className="flex  text-blue-900 text-sm font-semibold "
//           >
//             תאריך
//           </label>
//           <input
//             className=" flex h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline md:w-72 lg:w-96 w-72  mb-6"
//             type="date"
//             placeholder="תאריך"
//             {...register}
//           />
//           <label
//             htmlFor=""
//             className="flex  text-blue-900 text-sm font-semibold "
//           >
//             תמונה
//           </label>
//           <input
//             className=" flex h-12 px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline md:w-72 lg:w-96 w-72  mb-6"
//             type="file"
//             accept="image/png/jpeg/svg/gif/jpg"
//             multiple
//             onChange={(e) => setImg(e.target.files[0])}
//           />
//           <div className="text-center">
//             <button
//               type="submit"
//               className="w-56    h-12 px-6 font-medium tracking-wide text-green-700 transition duration-200 rounded shadow-md  hover:bg-gray-700 hover:border-2 hover:border-gray-900 hover:text-white focus:shadow-outline focus:outline-none mb-4"
//             >
//               פרסם
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DepartmentPostEdit;

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