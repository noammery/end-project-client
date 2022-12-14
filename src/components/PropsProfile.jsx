import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { useSelector } from "react-redux";

export const PropsProfile = () => {
  const monthNames = [
    "ינואר",
    "פבואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  const location = useLocation();
  const email = location.state.email;
  const [theUser, setTheUser] = useState();
  const day = new Date(theUser?.birthday).getDate();
  const month = new Date(theUser?.birthday).getMonth();
  const updatedBirthday = `${day} ב${monthNames[month]}`;
  const reduxUsers = useSelector((state) => state.profile.profiles);
  useEffect(() => {
    for (let i = 0; i < reduxUsers.length; i++) {
      reduxUsers[i].email === email && setTheUser(reduxUsers[i]);
    }
  }, [reduxUsers, email]);
  return (
    <section className="pt-16 min-h-screen flex items-center bg-gray-200">
      <div className="w-full  px-4 m-auto ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full px-4 flex justify-center pt-5">
                <img
                  alt="..."
                  src={theUser?.image}
                  className="w-44 h-44 shadow-xl rounded-full relative object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-3 ">
              <h3 className="text-3xl font-semibold leading-normal">
                {theUser?.fullname}
              </h3>
              <div className="text-xl leading-normal mb-2 font-bold">
                אגף: {theUser?.department}
              </div>
              <div className=" w-full mt-5 flex flex-col items-center">
                <div>
                  <div className="mb-1  mx-3 p-2 rounded-lg font-semibold">
                    <h1 className="flex items-center text-xl">
                      <MdEmail className="mt-1" />: {theUser?.email}
                    </h1>
                  </div>
                  <div className="mb-1  mx-3 p-2 rounded-lg font-semibold">
                    <span className="flex items-center text-xl">
                      <BsFillPhoneFill />:{" "}
                      <span dir="ltr" className="mx-1">
                        {theUser?.phone}
                      </span>
                    </span>
                  </div>
                  <div className="mb-1  mx-3 p-2 rounded-lg font-semibold">
                    <span className="flex items-center text-xl">
                      <FaBirthdayCake />: {updatedBirthday}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 py-10 border-t  text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <span className="font-semibold text-2xl mb-5">
                    סטטוס נוכחי:{" "}
                  </span>
                  <span
                    className={
                      theUser?.status === "לא נמצא"
                        ? "font-semibold text-2xl mb-5 text-red-500"
                        : theUser?.status === "בעבודה"
                        ? "font-semibold text-2xl mb-5 text-green-700"
                        : "font-semibold text-2xl mb-5 "
                    }
                  >
                    {theUser?.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
