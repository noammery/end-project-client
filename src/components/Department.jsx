import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

function Department() {
  const [postData, setpostData] = useState();
  const [userData, setuserData] = useState();
  const location = useLocation();
  const { department } = location.state;
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/departments/data`, {
        department: department,
      })
      .then((res) => setpostData(res.data));
  }, [department]);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_SERVER}/auth/userbydepartment`, {
        department: department,
      })
      .then((res) => setuserData(res.data));
  }, [department]);

  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      {modal && (
        <div className="fixed bg-black bg-opacity-25 backdrop-blur-sm inset-0  flex flex-col items-center">
          <div className="w-screen min-h-screen pt-32 flex flex-col items-center ">
            <ul className="flex flex-col divide divide-y h-96 overflow-scroll scrollbar-hide border-2 rounded-lg mb-2 bg-white">
              <div className="h-12 flex justify-center">
                <input
                  type="text"
                  className="rounded-lg bg-gray-100 mt-1  hover:scale-105 h-10 "
                  placeholder="חפש מישהו..."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
              {userData
                ?.filter((user) => {
                  if (
                    searchTerm === "" ||
                    user.fullname
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return user;
                  } else return null;
                })
                .map((user, i) => {
                  return (
                    <Link
                      to="/companyuser"
                      key={i}
                      state={{ email: user.email }}
                    >
                      <li className="flex flex-row p-2">
                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                          <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <div className="block relative">
                              <img
                                alt="profil"
                                src={user.image}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </div>
                          </div>
                          <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium ">{user.fullname}</div>
                            <div className="text-gray-600 text-sm">
                              {department}
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
                  );
                })}
            </ul>
            <AiFillCloseCircle
              className="text-5xl text-red-600 cursor-pointer"
              onClick={() => setModal(!modal)}
            />
          </div>
        </div>
      )}
      <div className="pt-36 flex flex-col items-center">
        <h1 className="text-5xl flex justify-center mb-10 font-semibold text-gray-900">
          אגף ה{department}
        </h1>
        <label className="mb-2 font-bold" htmlFor="">
          עובדים באגף
        </label>
        <BsPeopleFill
          className="text-4xl text-blue-700 cursor-pointer"
          onClick={() => setModal(!modal)}
        />
      </div>
      <div className="mt-5 sm:flex-row md:flex-row lf:flex-row flex flex-col sm:items-start md:items-start lg:items-start items-center ">
        <div className="p-10">
          {postData?.map((post, index) => {
            return (
              <div
                key={index}
                className=" m-10 lg:flex-row md:flex-row sm:flex-row flex flex-col items-center  bg-white rounded-xl border-2 border-gray-700  p-5"
              >
                <img src={post.image} alt="" className="w-40 " />
                <div className="flex flex-col md:pr-10 lg:pr-10 space-y-3 justify-center items-center">
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <h1 className="text-lg font-semibold w-5/6">
                    {post.description}
                  </h1>
                  <h1 className="text-xs text-black/60 ">{`
                    ${new Date(post.date).getFullYear()}/${
                    new Date(post.date).getMonth() + 1
                  }/${new Date(post.date).getDate()}
                    
                      `}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Department;
