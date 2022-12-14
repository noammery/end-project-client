import React from "react";
import { useSelector } from "react-redux";

const Bonusses = () => {
  const bonuses = useSelector((state) => state.bonuse.bonuses);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="pt-32  text-center">
        <h1 className="text-5xl font-bold text-black mb-10">הטבות</h1>
        <p className="text-black font-bold lg:text-2xl text-lg p-2">
          ברוכים הבאים לאזור ההטבות. בעמוד זה יפורטו ההטבות אשר מגיעות לכם/ן
          ופירוטן.
        </p>
      </div>
      <div className="flex flex-col w-screen items-center justify-center mt-20">
        {bonuses?.map(({ _id, image, title, description, link, linktitle }) => {
          return (
            <div
              className="lg:max-w-md md:max-w-md lg:min-w-md md:min-w-md rounded-lg shadow-black/50 overflow-hidden shadow-lg mx-10 h-2/3 my-5 p-5"
              key={_id}
            >
              <img
                className="lg:h-56  min-w-full object-fill rounded-lg"
                src={image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 text-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{linktitle}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bonusses;
