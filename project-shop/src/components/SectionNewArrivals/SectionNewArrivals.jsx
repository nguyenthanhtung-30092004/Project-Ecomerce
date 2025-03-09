import React from "react";
import BoxProduct from "../BoxProduct/BoxProduct";

const SectionNewArrivals = ({ products }) => {
  return (
    <section className="mt-0 lg:mt-24 pt-16 pb-8 bg-gray bg-opacity-100">
      <div className="container">
        <div className="lg:flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <p className="mt-2 text-base/[20px] text-caption">
              Experience the best products at our store!
            </p>
          </div>
          <a
            href="#none"
            className="inline-flex mt-6 lg:mt-0 text-[15px] h-9 border border-black px-7 items-center justify-center rounded-full font-semibold hover:text-white hover:bg-black transition-all duration-300"
          >
            View All
          </a>
        </div>

        <ul className="lg:grid grid-cols-4 gap-7 mt-8">
          {products.slice(0, 8).map((item, index) => (
            <BoxProduct data={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionNewArrivals;
