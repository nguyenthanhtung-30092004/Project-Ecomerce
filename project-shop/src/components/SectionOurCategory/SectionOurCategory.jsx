import React, { useEffect, useState } from "react";
import BoxCategory from "./BoxCategory";
import useFetchDataGetAllCategory from "../../hooks/useFetchDataGetAllCategory";

const SectionOurCategory = ({ type }) => {
  const { categories } = useFetchDataGetAllCategory();
  return type === 1 ? (
    <section className="mt-8 lg:mt-24">
      <div className="container">
        <div className="lg:flex block justify-between">
          <h2 className="text-3xl font-bold">Our Categories</h2>
          <a
            href="#"
            className="inline-flex text-[15px] mt-6 lg:mt-0 h-9 border border-black px-7 items-center justify-center rounded-full font-semibold hover:text-white hover:bg-black transition-all duration-300"
          >
            View All
          </a>
        </div>

        <ul className="md:grid grid-cols-3 gap-10 mt-10 cursor-pointer">
          {categories.slice(11, 14).map((item, index) => (
            <BoxCategory data={item} key={index} idx={index} type={1} />
          ))}
        </ul>
      </div>
    </section>
  ) : (
    <section className="mt-9 lg:mt-24">
      <div className="container">
        <p className="text-3xl text-center font-bold">Our Categories</p>
        <ul className="md:grid grid-cols-4 gap-10 mt-11">
          {categories.slice(0, 8).map((item, index) => (
            <BoxCategory type={2} key={index} idx={index} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionOurCategory;
