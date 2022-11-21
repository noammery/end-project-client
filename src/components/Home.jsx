import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";

export const Home = () => {
  const [events, setEvents] = useState();
  const [monthlyBirthday, setMonthlyBirthday] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [allUsers, setAllUsers] = useState();
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const TodaysMonth = `${new Date().getMonth()}`;
    axios
      .post(`${process.env.REACT_APP_SERVER}/departments/data`, {
        department: "ראשי",
      })
      .then((res) => setEvents(res.data));
    axios
      .get(`${process.env.REACT_APP_SERVER}/auth/users`)
      .then((res) => {setAllUsers(res.data);
       for(let i = 0; i < res.data.length; i++) {
        const birthdayMonth = `${new Date(res.data[i].birthday).getMonth()}`;
        birthdayMonth === TodaysMonth &&
        setMonthlyBirthday((l) => [
          ...l,
          { fullname: res.data[i].fullname, image: res.data[i].image },
        ]);
      }}
      );
  }, []);
  console.log(monthlyBirthday);
  return (
    <div className="bg-gray-200 min-h-screen">
      {modal && (
        <div className="fixed bg-black bg-opacity-25 backdrop-blur-sm inset-0  flex flex-col items-center z-40">
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
              {allUsers
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
                            <div className="font-medium dark:text-white">
                              {user.fullname}
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                              {user.department}
                            </div>
                          </div>
                        </div>
                      </li>
                    </Link>
                  );
                })}
            </ul>
            <button
              className="inline-flex items-center justify-center  h-12 px-6 font-medium border-2 border-black rounded-lg bg-gray-600 text-white hover:bg-gray-900 mb-4 transition duration-300"
              onClick={() => setModal(!modal)}
            >
              סגור
            </button>
          </div>
        </div>
      )}
      <div className="pt-28 w-screen">
        <div className="flex items-center flex-col">
          <h1 className="text-4xl font-bold text-center  ">אירועים אחרונים</h1>
          <button
            className="inline-flex items-center justify-center  h-12 px-6 font-medium border-2 border-black rounded-lg bg-gray-600 text-white hover:bg-gray-900 mb-4 transition duration-300 mt-5"
            onClick={() => setModal(!modal)}
          >
            הצג עובדים
          </button>
        </div>
        <div className="p-10">
          <div className="w-screen  flex flex-col items-center">
            <button className="inline-flex items-center justify-center  h-12 px-6 font-medium border-2 border-black rounded-lg bg-gray-600 text-white hover:bg-gray-900 mb-4 transition duration-300 mt-5" onClick={handleOpen}>הצג</button>
            {open ? (
              <ul  className="flex flex-col divide divide-y h-96 overflow-scroll scrollbar-hide border-2 rounded-lg mb-2 bg-white">
                {monthlyBirthday?.map((user, index) => {
                  return (
                    <li className="flex flex-row p-2" key={index}>
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
                          <div className="font-medium dark:text-white">
                            {user.fullname}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {open ? <div className="inline-flex items-center justify-center  h-12 px-6 font-medium border-2 border-black rounded-lg bg-gray-600 text-white hover:bg-gray-900 mb-4 transition duration-300 mt-5">חוגגים החודש</div> : <div className="inline-flex items-center justify-center  h-12 px-6 font-medium border-2 border-black rounded-lg bg-gray-600 text-white hover:bg-gray-900 mb-4 transition duration-300 mt-5">חוגגים החודש</div>}
          </div>
          {events?.map((post, index) => {
            return (
              <div
                key={index}
                className="lg:flex-row md:flex-row sm:flex-row my-10 flex flex-col items-center  bg-white p-2 border-2 border-gray-700 rounded-lg"
              >
                <img src={post.image} alt="" className="w-56 mb-5" />
                <div className="flex flex-col pr-10 space-y-3 justify-center">
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <h1 className="text-lg font-semibold w-5/6">
                    {post.description}
                  </h1>
                  <h1 className="text-xs text-black/60 ">{post.date}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <></>
        <Calendar />
      </div>
    </div>
  );
};
