import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import apiServiceCategory from "../../services/apiServicesCategoy";
import { Backdrop, CircularProgress, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ico_ege from "../../assets/images/ico_eye.png";
import ico_fire from "../../assets/images/ico_fire.png";
import ico_checked from "../../assets/images/ico_checked.png";
import ico_heart from "../../assets/images/ico_heart.png";
import ico_reload from "../../assets/images/ico_reload.png";
import ico_question from "../../assets/images/ico_question.png";
import ico_shipping from "../../assets/images/ico_shipping.png";
import ico_share from "../../assets/images/ico_share.png";
import ico_shipping2 from "../../assets/images/ico_shipping2.png";
import ico_check from "../../assets/images/ico_check.png";
import img_payment from "../../assets/images/img_payment.avif";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
import { toast } from "react-toastify";

const DetailProduct = () => {
  const divRef = useRef(null);
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [productByCategory, setProductByCategory] = useState([]);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (id) {
      if (divRef.current) {
        divRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      setIsLoading(true);
      const fetchData = async () => {
        const res = await apiServiceCategory.getDetailProduct(id);
        if (res.status) {
          setDataDetail(res.data);
          setIsLoading(false);
          setCategory(res.data.category);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity,
      })
    );
    toast.success("Thêm sản phẩm thành công!", {
      autoClose: 500,
    });
  };
  useEffect(() => {
    const fetchDataProductByCategory = async () => {
      if (!category) return;
      const res = await apiServiceCategory.getProductByCategory(category);
      if (res.status === 200) {
        setProductByCategory(res.data.products);
      }
    };

    fetchDataProductByCategory();
  }, [category]);
  return (
    <>
      {dataDetail ? (
        <div ref={divRef}>
          <section>
            <div className="container">
              <ul className="flex gap-2 items-center py-4">
                <li>
                  <a className="text-sm" href="#none">
                    Home /
                  </a>
                </li>
                <li>
                  <a className="text-sm" href="#none">
                    {dataDetail.category} /
                  </a>
                </li>
                <li>
                  <a className="text-sm hover:cursor-text" href="#none">
                    {dataDetail.title}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="lg:grid grid-cols-5 gap-7 mt-4">
                <div className="col-span-3 flex gap-3">
                  <ul className="flex flex-col gap-4">
                    {dataDetail.images.map((item, index) => {
                      if (index === 0) {
                        return (
                          <li
                            key={index}
                            className="w-[82px] cursor-pointer p-[10px] rounded-md border border-black hover:border-black transition-all"
                          >
                            <img
                              className="image"
                              src={dataDetail.images[index]}
                              alt="Thumb"
                            />
                          </li>
                        );
                      } else {
                        return (
                          <li
                            key={index}
                            className="w-[82px] cursor-pointer p-[10px] rounded-md border hover:border-black transition-all"
                          >
                            <img
                              className="image"
                              src={dataDetail.images[index]}
                              alt="Thumb"
                            />
                          </li>
                        );
                      }
                    })}
                  </ul>

                  <div className="overflow-hidden w-full">
                    <div className="rounded-xl w-full overflow-hidden">
                      <img
                        className="hover:scale-110 transition-all w-full object-cover bg-[#F6F6F6] duration-300"
                        src={dataDetail.thumbnail}
                        alt="Product-detail"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-2 mt-6">
                  <h2 className="text-xl lg:text-3xl font-semibold">
                    {dataDetail.title}
                  </h2>
                  <ul className="flex items-center gap-1 mt-4">
                    <Rating
                      name="text-feedback"
                      value={dataDetail.rating}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </ul>
                  <p className="mt-3 text-xl font-semibold">$70.00</p>
                  <div className="mt-2 pt-2 border-t border-gray-300">
                    <p className="flex items-center gap-2 mt-2">
                      <img
                        className="w-5 block animate-flicker"
                        src={ico_ege}
                        alt="Ege Icon"
                      />
                      <span className="font-medium text-sm">
                        35 people are viewing this right now
                      </span>
                    </p>

                    <p className="flex items-center gap-2 mt-4">
                      <img
                        className="w-5 block animate-flicker"
                        src={ico_fire}
                        alt="Fire Icon"
                      />
                      <span className="font-medium text-sm text-red-600">
                        35 sold in last 18 hours
                      </span>
                    </p>

                    <p className="flex items-center gap-2 mt-6 text-green-500">
                      <img
                        className="w-5 block animate-flicker"
                        src={ico_checked}
                        alt="Checked Icon"
                      />
                      <span className="font-medium text-sm">In stock</span>
                    </p>

                    <p className="mt-5 text-gray-500">
                      {dataDetail.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex items-center w-max relative">
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity - 1)}
                          disabled={quantity === 1}
                          className="text-lg size-[30px] flex items-center justify-center text-[0px] absolute top-2.5 left-4"
                        >
                          <p className="text-2xl leading-[24px]">-</p>
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          readOnly
                          className="w-[120px] h-[50px] border text-center px-10 border-gray-500 rounded-full"
                        />
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="text-lg size-[30px] flex
                          items-center justify-center text-[0px] absolute top-2.5 right-4"
                        >
                          <p className="text-2xl leading-[24px]">+</p>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(dataDetail)}
                        className="h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg-white border hover:border-black hover:text-black transition-all"
                      >
                        Add To Cart
                      </button>

                      <button
                        className="p-4 bg-white border border-[#6e6e6e] rounded-full"
                        type="button"
                      >
                        <img className="w-4" src={ico_heart} alt="Heart" />
                      </button>
                    </div>

                    <ul className="flex items-center gap-4 mt-6">
                      <li>
                        <button
                          type="button"
                          className="flex items-center gap-4 text-sm font-medium"
                        >
                          <img
                            className="w-4"
                            src={ico_reload}
                            alt="Reload Icon"
                          />
                          Compare
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center gap-4 text-sm font-medium"
                        >
                          <img
                            className="w-4"
                            src={ico_question}
                            alt="Question Icon"
                          />
                          Compare
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center gap-4 text-sm font-medium"
                        >
                          <img
                            className="w-4"
                            src={ico_shipping}
                            alt="Shipping Icon"
                          />
                          Shpping info
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center gap-4 text-sm font-medium"
                        >
                          <img
                            className="w-4"
                            src={ico_share}
                            alt="Share Icon"
                          />
                          Share
                        </button>
                      </li>
                    </ul>

                    <div className="flex items-center mt-6 mb-6 pt-6 pb-6 border-t border-b border-b-gray-300 border-t-gray-300">
                      <div>
                        <img
                          className="block w-9"
                          src={ico_shipping2}
                          alt="Shipping2"
                        />
                      </div>
                      <p className="flex-1 ml-4 pl-4 border-l border-l-[#d9d9d9] text-sm">
                        Order in the next 22 hours 45 minutes to get it between
                        <br />
                        <span className="font-semibold underline">
                          Tuesday, Oct 22
                        </span>
                        <span className="mx-2">and</span>
                        <span className="font-semibold underline">
                          Saturday, Oct 26
                        </span>
                      </p>
                    </div>

                    <div className="p-[15px] rounded-xl border border-[#dedede] flex items-start gap-3">
                      <div>
                        <img
                          className="w-6 block"
                          src={ico_check}
                          alt="Check Icon"
                        />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-400">
                          Pickup available at{" "}
                          <span className="font-semibold text-black">
                            {" "}
                            Akaze store
                          </span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Usually ready in 24 hours
                        </p>
                        <button
                          type="button"
                          className="underline text-xs mt-4"
                        >
                          View store information
                        </button>
                      </div>
                    </div>

                    <div className="text-center mt-6 p-6 bg-[#f6f6f6] rounded-lg">
                      <p className="text-sm tracking-widest">
                        Guaranteed Checkout
                      </p>
                      <img className="block mt-3" src={img_payment} alt="Pay" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-9 lg:mt-24">
                <ul className="flex items-center lg:justify-center gap-6">
                  <li>
                    <button
                      type="button"
                      className="lg:block text-lg font-semibold bg-black py-2 px-4 rounded-full text-white hover:text-black transition-all"
                    >
                      Description
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                    >
                      Review
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                    >
                      Shipping
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                    >
                      Return
                    </button>
                  </li>
                </ul>

                <div className="mt-9 lg:mt-20">
                  <p className="text-[#8a8a8a] leading-7">
                    Get a fresh 'fit for spring with the Free People Love Letter
                    Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard
                    fabric, with a textured floral design throughout, shapes
                    this cami top that has wide straps, a high square neckline,
                    and a fitted bodice that ends at a cropped hem with
                    lettuce-edge trim.
                  </p>
                  <p className="text-[#8a8a8a] leading-7 mt-9">
                    Get a fresh 'fit for spring with the Free People Love Letter
                    Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard
                    fabric, with a textured floral design throughout, shapes
                    this cami top that has wide straps, a high square neckline,
                    and a fitted bodice that ends at a cropped hem with
                    lettuce-edge trim. Get a fresh 'fit for spring with the Free
                    People Love Letter Ivory Floral Jacquard Cropped Cami Top!
                    Stretchy jacquard fabric, with a textured floral design
                    throughout, shapes this cami top that has wide straps, a
                    high square neckline, and a fitted bodice that ends at a
                    cropped hem with lettuce-edge trim.
                  </p>
                </div>
              </div>

              <div className="mt-24 mb-24">
                <h2 className="text-center text-lg lg:text-3xl font-semibold">
                  You may also like
                </h2>
                <ul className="lg:grid grid-cols-4 gap-7 mt-8">
                  {productByCategory.map((item) => (
                    <BoxProduct key={item.id} type={1} data={item} />
                  ))}
                </ul>
              </div>

              <div className="mt-24 mb-32">
                <h2 className="text-center text-xl lg:text-3xl font-semibold">
                  You may also like
                </h2>
                <ul className="lg:grid grid-cols-4 gap-7 mt-8"></ul>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLoading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default DetailProduct;
