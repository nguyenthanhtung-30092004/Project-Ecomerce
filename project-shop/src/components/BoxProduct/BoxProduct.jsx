import { Grow, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import ico_heart from "../../assets/images/ico_heart.png";
import ico_reload from "../../assets/images/ico_reload.png";
import ico_search from "../../assets/images/ico_search.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Event, InsertEmoticon } from "@mui/icons-material";

const BoxProduct = ({ data, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = (event) => {
    event.stopPropagation();
    toast.success("Thêm sản phẩm thành công!", {
      autoClose: 500,
    });
    dispatch(
      addToCart({
        ...data,
        quantity: 1,
      })
    );
  };
  return type ? (
    <Grow
      onClick={() => navigate(`/product/${data.id}`)}
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <li className="group relative">
        <div className="inline-flex w-full flex-col hover:cursor-pointer items-center justify-center">
          <div className="rounded-xl w-full overflow-hidden flex items-center justify-center bg-[#F6F6F6] lg:h-[385px]">
            <div>
              <img
                className="image bg:h-[385px] object-cover"
                src={data.thumbnail}
                alt="Caravaggio Read Wall Light"
              />
            </div>
          </div>
          <div className="flex items-center mt-5 gap-1">
            <Rating
              name="text-feedback"
              value={data.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>
          <h3 className="text-content mt-2">{data.title}</h3>
          <div className="relative w-full flex mt-2 flex-col h-5 overflow-hidden items-center">
            <div className="absolute transition-all top-1/2 -translate-y-1/2 duration-300 opacity-100 group-hover:-top-5 group-hover:opacity-0 flex flex-row">
              <p className="text-content text-red-500 font-bold">
                ${data.price}
              </p>
            </div>
            <button
              onClick={(event) => handleAddToCart(event)}
              className="relative block font-medium -bottom-5 transition-all duration-300 opacity-0 group-hover:bottom-0 group-hover:opacity-100 uppercase text-xs after:absolute after:w-0 hover:after:w-full after:transition-all after:duration-500 after:left-0 after:h-[1.5px] after:-bottom-[2px] after:bg-black"
            >
              add to cart
            </button>
          </div>
          <span className="absolute text-xs rounded-full py-1 px-2 bg-red-600 text-white top-3 left-3">
            -{data.discountPercentage}%
          </span>
          <ul className="absolute left-4 bottom-28 flex flex-col gap-3">
            <li className="opacity-0 group-hover:opacity-100 translate-y-4 duration-200 group-hover:translate-y-0">
              <button
                type="button"
                className="rounded-full bg-white  hover:bg-slate-200 p-3 shadow-lg overflow-hidden"
              >
                <img className="size-4" src={ico_heart} alt="Heart" />
              </button>
            </li>
            <li className="opacity-0 group-hover:opacity-100 translate-y-4 duration-200 group-hover:translate-y-0 delay-100">
              <button
                type="button"
                className="rounded-full bg-white  hover:bg-slate-200 p-3 shadow-lg overflow-hidden"
              >
                <img className="size-4" src={ico_reload} alt="Reload" />
              </button>
            </li>
            <li className="opacity-0 group-hover:opacity-100 translate-y-4 duration-200 group-hover:translate-y-0 delay-200">
              <button
                type="button"
                className="rounded-full bg-white  hover:bg-slate-200 p-3 shadow-lg overflow-hidden"
              >
                <img className="size-4" src={ico_search} alt="Search" />
              </button>
            </li>
          </ul>
        </div>
      </li>
    </Grow>
  ) : (
    <Grow
      onClick={() => navigate(`/product/${data.id}`)}
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <li className="group relative">
        <div className="inline-flex w-full flex-col hover:cursor-pointer items-center justify-center">
          <div className="rounded-xl w-full overflow-hidden flex items-center justify-center bg-white lg:h-[385px]">
            <a href="">
              <img
                className="image w-full object-cover"
                src={data.thumbnail}
                alt="Caravaggio Read Wall Light"
              />
            </a>
          </div>
          <div className="flex items-center mt-5 gap-1">
            <Rating
              name="text-feedback"
              value={data.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </div>
          <h3 className="text-content mt-2">{data.title}</h3>
          <div className="relative w-full flex mt-2 flex-col h-5 overflow-hidden items-center">
            <div className="absolute transition-all top-1/2 -translate-y-1/2 duration-300 opacity-100 group-hover:-top-5 group-hover:opacity-0 flex flex-row">
              <p className="text-content text-red-500 font-bold">
                ${data.price}
              </p>
            </div>
            <button
              onClick={(event) => handleAddToCart(event)}
              className="relative block font-medium -bottom-5 transition-all duration-300 opacity-0 group-hover:bottom-0 group-hover:opacity-100 uppercase text-xs after:absolute after:w-0 hover:after:w-full after:transition-all after:duration-500 after:left-0 after:h-[1.5px] after:-bottom-[2px] after:bg-black"
            >
              add to cart
            </button>
          </div>
          <span className="absolute text-xs rounded-full py-1 px-2 bg-red-600 text-white top-3 left-3">
            -{data.discountPercentage}%
          </span>
          <ul className="absolute left-4 bottom-28 flex flex-col gap-3">
            <li className="opacity-0 group-hover:opacity-100 translate-y-4 duration-200 group-hover:translate-y-0">
              <button
                type="button"
                className="rounded-full bg-white  hover:bg-slate-200 p-3 shadow-lg overflow-hidden"
              >
                <img className="size-4" src={ico_heart} alt="Heart" />
              </button>
            </li>
            <li className="opacity-0 group-hover:opacity-100 translate-y-4 duration-200 group-hover:translate-y-0 delay-100">
              <button
                type="button"
                className="rounded-full bg-white  hover:bg-slate-200 p-3 shadow-lg overflow-hidden"
              >
                <img className="size-4" src={ico_reload} alt="Reload" />
              </button>
            </li>
            <li className="opacity-0 group-hover:opacity-100 translate-y-4 duration-200 group-hover:translate-y-0 delay-200">
              <button
                type="button"
                className="rounded-full bg-white  hover:bg-slate-200 p-3 shadow-lg overflow-hidden"
              >
                <img className="size-4" src={ico_search} alt="Search" />
              </button>
            </li>
          </ul>
        </div>
      </li>
    </Grow>
  );
};

export default BoxProduct;
