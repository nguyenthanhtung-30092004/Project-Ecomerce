import React from "react";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-24">
          <div>
            <p className="text-lg font-bold mb-4">About Us</p>
            <div className="">
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full">
                <a href="#">Our Shops</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Contact</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Artists</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Local Giving</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Press</a>
              </span>
            </div>
          </div>

          <div className="flex flex-col col-span-2 items-center justify-center">
            <h3 className="mb-4 text-xl text-center font-semibold">
              Sign Up For Our Newsletter To Receive Notifications And Other
              Promotions
            </h3>
            <div className="mb-0 md:mb-4 w-full rounded-full flex overflow-hidden border-black border">
              <input
                className="p-4 flex-1 rounded-full text-black focus:outline-none"
                type="text"
                placeholder="Email address..."
              />
              <button className="px-6 text-base text-white bg-black">
                Subcribe
              </button>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold mb-4">Customer Services</p>
            <div className="">
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full">
                <a href="#">FAQs</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Store Locator</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Returns</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Shipping Information</a>
              </span>
              <br />
              <span className="relative text-base/[20px] inline-block after:h-[1px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:absolute after:bottom-0  after:bg-black hover:after:w-full mt-2">
                <a href="#">Wholesale</a>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="mb-4 text-sm text-gray-600 text-center">
            Copyright © 2024. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
