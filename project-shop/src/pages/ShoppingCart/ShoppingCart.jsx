import React, { use, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  removeCart,
} from "../../redux/feature/cartSlice";
import { FaTrash } from "react-icons/fa";
const ShoppingCart = () => {
  const divRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.carts.cartItems);
  const [sum, setSum] = useState(0);

  const decrementCart = (item) => {
    dispatch(decrementQuantity(item));
  };
  const encrementCart = (item) => {
    dispatch(
      addToCart({
        ...item,
        quantity: 1,
      })
    );
  };
  const deleteCart = (item) => {
    dispatch(removeCart(item));
  };
  useEffect(() => {
    const total = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSum(total);
  }, [data]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="pt-20">
        <h2 className="text-3xl font-semibold text-center">Shopping Cart</h2>
        <div className="container">
          <div className="lg:grid grid-cols-6 mt-10 gap-8">
            <div className="col-span-4">
              <div className="rounded-lg overflow-hidden">
                <div className="hidden lg:flex bg-[#EBEBE9]">
                  <div className="p-5 font-medium w-2/4 flex items-center justify-center">
                    Product
                  </div>
                  <div className="p-5 font-medium w-1/4 flex items-center justify-center">
                    Quantity
                  </div>
                  <div className="p-5 font-medium w-1/4 flex items-center justify-center">
                    Total
                  </div>
                  <div className="p-5 font-medium w-1/4 flex items-center justify-center"></div>
                </div>
              </div>
              {data &&
                data.map((item) => (
                  <div key={item.id} className="flex">
                    <div className="p-2 lg:p-5 border-b border-gray-400 w-2/4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 overflow-hidden">
                          <img src={item.thumbnail} alt="" />
                        </div>
                        <div>
                          <p className="text-xs uppercase">{item.title}</p>
                          <span className="text-xs">${item.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 border-b border-gray-400 w-1/4 flex items-center justify-center">
                      <div className="flex items-center w-max relative">
                        <button
                          type="button"
                          disabled={item.quantity === 1}
                          onClick={() => decrementCart(item)}
                          className="text-lg size-[30px] flex items-center justify-center text-[0px] absolute top-2.5 left-4"
                        >
                          <p className="text-2xl leading-[24px]">-</p>
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="w-[120px] h-[50px] border text-center px-10 border-gray-500 rounded-full"
                        />
                        <button
                          type="button"
                          onClick={() => encrementCart(item)}
                          className="text-lg size-[30px] flex
                          items-center justify-center text-[0px] absolute top-2.5 right-4"
                        >
                          <p className="text-2xl leading-[24px]">+</p>
                        </button>
                      </div>
                    </div>
                    <div className="p-5 border-b border-gray-400 w-1/4 flex items-center justify-center">
                      ${(item.quantity * item.price).toFixed(2)}
                    </div>
                    <div className="p-5 border-b border-gray-400 w-1/4 flex items-center justify-center">
                      <button
                        onClick={() => deleteCart(item)}
                        className="size-[30px] rounded-[5px]"
                      >
                        <FaTrash className="text-xl" />
                      </button>
                    </div>
                  </div>
                ))}

              <div className="mt-9">
                <p className="text-md">Special instructions for seller</p>

                <textarea
                  name=""
                  id=""
                  placeholder="how can we help you?"
                  className="text-md mt-3 border border-gray p-5 w-full"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="col-span-2 mt-6 lg:mt-0">
              <div className="p-7 bg-[#f7f4ef] rounded-lg">
                <h3 className="uppercase font-medium text-sm">
                  FREE SHIPPING ON ORDERS $100.00
                </h3>
                <p className="text-sm mt-2">
                  Congratulations , you've got free shipping!
                </p>
                <p className="bg-[#14c100] w-full h-1 mt-5"></p>
              </div>

              <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
                <span>Coupon</span>
                <p className="mt-2 mb-6 text-md text-lightGray">
                  * Discount will be calculated and applied at checkout
                </p>
                <input
                  type="text"
                  className="h-10 px-6 text-sm border border-gray rounded-md w-full"
                  placeholder="Coupon code"
                />
                <p className="mt-6 font-semibold">Total: ${sum.toFixed(2)}</p>
                <a
                  href="order.html"
                  className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                >
                  Check out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
