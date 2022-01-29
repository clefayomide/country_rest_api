import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { name, capital, flags, population, region } = data;
  const { common } = name;
  const { png } = flags;

  return (
    <div className="w-full md:w-5/11 lg:w-3/10 cursor-pointer">
      <Link to={`information/${common}`}>
        <div
          style={{ backgroundImage: `url("${png}")` }}
          className="bg-center bg-cover h-36 mt-14 shadow-xl rounded-t-lg"
        ></div>
        <div className="bg-white dark:bg-darkModeElements shadow-xl rounded-b-lg pl-5 pt-7 pb-9">
          <h3 className=" font-extrabold dark:text-darkModeTextAndDarkModeElements">{common}</h3>
          <p className="font-semibold pt-4 dark:text-darkModeTextAndDarkModeElements">
            Population: <span className="font-light dark:text-slate-200">{population}</span>
          </p>
          <p className="font-semibold dark:text-darkModeTextAndDarkModeElements">
            Region: <span className="font-light dark:text-slate-200">{region}</span>
          </p>
          <p className="font-semibold dark:text-darkModeTextAndDarkModeElements">
            Capital:{" "}
            <span className="font-light dark:text-slate-200">{capital ? capital : common}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
