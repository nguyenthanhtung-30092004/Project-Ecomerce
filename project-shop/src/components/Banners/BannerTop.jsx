import React from "react";
import bannerTop from "../../assets/images/img_banner.webp";
import { Link } from "react-router-dom";
const BannerTop = () => {
  return (
    <section className="relative overflow-hidden">
      <div data-aos="zoom-in-up" className="relative pt-[44.791%] bg-gray-300">
        <img className="absolute inset-0" src={bannerTop} alt="Image Banner" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="lg:text-4xl  text-white text-xl lg:leading-10 text-center font-semibold ">
          Harmony in Design: <br />
          Blending Form and Function
        </h2>
        <Link to={"/product"}>
          <div className="text-center mt-4 lg:mt-8">
            <button className="px-7 h-9 rounded-full hover:bg-white duration-300 transition-all hover:text-black border-white border text-white text-[15px] font-semibold items-center">
              Shop now
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BannerTop;
