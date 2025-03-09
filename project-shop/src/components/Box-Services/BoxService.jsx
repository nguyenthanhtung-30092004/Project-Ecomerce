import React from "react";

const BoxService = ({ data }) => {
  return (
    <li className="flex gap-[15px] items-center flex-1 lg:justify-center">
      <div>
        <img className="image" src={data.url} alt={data.title} />
      </div>
      <p className="font-semibold text-sm lg:text-base">{data.title}</p>
    </li>
  );
};

export default BoxService;
