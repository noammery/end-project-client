import axios from "axios";
import { useState } from "react";

export const AddDepartments = () => {
  const [departmentName, setDepartmentName] = useState();
  const [departmentName1, setDepartmentName1] = useState();
  const handleCreateSubmit = () => {
    axios
      .post("http://localhost:5000/name/setname", {
        theName: departmentName,
      })
      .then((res) => console.log(res.data + "נוצרה בהצלחה"));
    setDepartmentName("");
  };
  const handleDeleteSubmit = () => {
    axios
      .delete("http://localhost:5000/name/deletename", {
        data: {
          theName: departmentName1,
        },
      })
      .then((res) => console.log(res.data + "נמחק"));
    setDepartmentName1("");
  };

  return (
    <div className="mt-24 w-screen bg-gray-200">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col w-96 bg-white p-10 m-10 items-center justify-center">
          <h1 className="text-center font-bold text-xl mb-5">הוסף אגף לאתר</h1>
          <input
            type="text"
            onChange={(e) => setDepartmentName(e.target.value)}
            value={departmentName}
            className="  px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline   mb-2 mx-2"
          />
          <button
            className="w-56  inline-flex items-center justify-center  h-12 px-6 font-medium tracking-wide text-green-700 transition duration-200 rounded shadow-md  hover:bg-gray-700 hover:border-2 hover:border-gray-900 hover:text-white focus:shadow-outline focus:outline-none my-4"
            onClick={handleCreateSubmit}
          >
            צור אגף
          </button>
        </div>
        <div className="flex flex-col w-96 bg-white p-10 m-10 items-center justify-center">
          <h1 className="text-center font-bold text-xl mb-5">מחק אגף מהאתר</h1>
          <input
            type="text"
            value={departmentName1}
            onChange={(e) => setDepartmentName1(e.target.value)}
            className="  px-4  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline   mb-2 mx-2"
          />
          <button
            className="w-56  inline-flex items-center justify-center  h-12 px-6 font-medium tracking-wide text-green-700 transition duration-200 rounded shadow-md  hover:bg-gray-700 hover:border-2 hover:border-gray-900 hover:text-white focus:shadow-outline focus:outline-none my-4"
            onClick={handleDeleteSubmit}
          >
            מחק אגף
          </button>
        </div>
      </div>
    </div>
  );
};