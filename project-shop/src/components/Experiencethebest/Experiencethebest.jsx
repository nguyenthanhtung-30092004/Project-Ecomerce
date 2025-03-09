import React from "react";
import ico_experiecet from "../../assets/images/img_experience.webp";
const Experiencethebest = () => {
  return (
    <section className="py-20 mt-20 mb-9 lg:mt-20 bg-gray">
      <div className="container">
        <div className="lg:flex justify-between items-center">
          <div>
            <p className="uppercase text-sm">experience the best</p>
            <p className="text-3xl font-semibold capitalize leading-[1.4] py-5 lg:py-10 ">
              Tailored Comfort:
              <br />
              Customized Interior
              <br />
              Styling
            </p>
            <a
              href="#none"
              className="inline-flex text-[15px] h-9 border border-black px-7 items-center justify-center rounded-full font-semibold hover:text-white hover:bg-black transition-all duration-300"
            >
              View All
            </a>
          </div>
          <div>
            <div className="rounded-xl mt-6 lg:mt-0 overflow-hidden">
              <img
                className="image w-full hover:cursor-pointer hover:scale-110 transition-all duration-300"
                src={ico_experiecet}
                alt="Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencethebest;
