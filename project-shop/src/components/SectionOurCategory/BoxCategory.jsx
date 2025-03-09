import React from "react";
import {
  avatarFake,
  imgForCategory,
  imgForCategory1,
} from "../../utils/constants/mockData";
import { Link } from "react-router-dom";

const BoxCategory = ({ data, idx, type }) => {
  return type === 1 ? (
    <li className="h-[300px]">
      <div className="rounded-[20px] h-full  mt-6 md:mt-0 w-full overflow-hidden relative group">
        <img
          className="image w-full h-full transition-transform object-cover duration-300 hover:scale-110"
          src={imgForCategory1[idx]}
          alt="Living Room"
        />
        <a
          href="#"
          className="absolute left-1/2 -bottom-10 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-10 mt-8 bg-white inline-flex text-[15px] h-9 px-7 items-center justify-center rounded-full font-semibold hover:text-white hover:bg-black transition-all duration-300"
        >
          {data.name}
        </a>
      </div>
    </li>
  ) : (
    <Link
      to={`/product/category/${data.slug}`}
      className="hover:cursor-pointer w-full h-[300px] overflow-hidden group mt-6 md:mt-0"
    >
      <div className="rounded-lg h-3/4 overflow-hidden">
        <img
          className="image w-full transition-all  object-cover h-full duration-300 group-hover:scale-110"
          src={imgForCategory[idx]}
          alt="BathRoom"
        />
      </div>
      <p className=" text-base/[20px] mt-4 font-semibold">{data.name}</p>
    </Link>
  );
};

export default BoxCategory;
