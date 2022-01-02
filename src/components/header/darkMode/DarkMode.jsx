import React from "react";
import Icon from "../../images/Icon";

const DarkMode = () => {
  return (
    <div className="flex justify-between w-28">
      <Icon
        svg={[<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"/>
</svg>]}/>
      <h4 className="font-semibold cursor-pointer">Dark Mode</h4>
    </div>
  );
};

export default DarkMode;
