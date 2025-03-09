import React, { use, useEffect, useRef, useState } from "react";
import img_product_list_banner from "../../assets/images/img_product_list_banner.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetchDataGetAllCategory from "../../hooks/useFetchDataGetAllCategory";
import apiServiceCategory from "../../services/apiServicesCategoy";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import apiServiceProduct from "../../services/apiServicesProduct";
import { FaArrowAltCircleUp } from "react-icons/fa";
const ListProduct = () => {
  const [iconBottom, setIconBottom] = useState(20);
  const { categories } = useFetchDataGetAllCategory();
  const [productByCategory, setProductByCategory] = useState([]);
  const [checkCate, setCheckCate] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const navigate = useNavigate();
  const { product } = useParams();
  const divRef = useRef();
  const moveTop = () => {
    window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
  };
  const handleMoveAll = async () => {
    setCheckCate("");
    navigate("/product");
  };

  const fetchDataProduct = async () => {
    const res = await apiServiceCategory.getProductByCategory(product);
    if (res.status === 200) {
      console.log(res);
      setProductByCategory(res.data.products);
      setCheckCate(product);
    }
  };
  const handleMove = async (item) => {
    navigate(`/product/category/${item}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await apiServiceProduct.getProduct();
      console.log(res);
      setAllProduct(res.products);
    };
    fetchData();
  }, []);
  useEffect(() => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }, [product]);
  useEffect(() => {
    if (!product) return;
    fetchDataProduct();
  }, [product]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIconBottom((prevBottom) => (prevBottom === 20 ? 25 : 20)); // Lên 30px, xuống 20px
    }, 200);

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, []);

  return (
    <div>
      <section className="relative">
        <div>
          <img
            className="image"
            src={img_product_list_banner}
            alt="Product banner"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-semibold">Products</h2>
          <ul className="flex gap-3 items-center justify-center mt-2">
            <li>
              <Link to={"/"} className="text-base/[20px]" href="index.html">
                Home /
              </Link>
            </li>
            <li ref={divRef}>
              <a className="text-base/[20px]" href="index.html">
                Products
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="pt-12 pb-12">
        <div className="container">
          <div className="lg:grid grid-cols-5">
            <div className="col-span-1 p-0 lg:p-4">
              <h2 className="text-lg font-semibold">Category</h2>
              <ul className="mt-4 space-y-3">
                <li className="mt-3">
                  <button
                    onClick={() => handleMoveAll()}
                    className={`font-medium text-sm ${
                      product ? "text-caption" : "text-white bg-black"
                    } border w-[170px] py-[10px] rounded-[10px] hover:bg-black duration-300 hover:text-white transition-all`}
                  >
                    All
                  </button>
                </li>
                {categories.map((item) => (
                  <li key={item.name} className="mt-3">
                    <button
                      onClick={() => handleMove(item.slug)}
                      className={`font-medium ${
                        item.slug === checkCate
                          ? "text-white bg-black"
                          : "text-caption"
                      }  hover:cursor-pointer text-sm border w-[170px] py-[10px] rounded-[10px] hover:bg-black duration-300 hover:text-white transition-all`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-4 mt-6 lg:mt-0">
              <div className="py-2 px-3 border border-black rounded-full cursor-pointer w-max">
                <select
                  className="w-full text-sm focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="1">Price, low to hight</option>
                  <option value="2">Price, hight to low</option>
                  <option value="3">Date, old to new</option>
                  <option value="4">Date, new to old</option>
                </select>
              </div>

              <ul className="lg:grid grid-cols-3 space-y-3 lg:space-y-0 gap-5 mt-9">
                {product
                  ? productByCategory.map((item) => (
                      <BoxProduct key={item.id} data={item} type={1} />
                    ))
                  : allProduct.map((item) => (
                      <BoxProduct key={item.id} data={item} type={1} />
                    ))}
              </ul>
              {product ? (
                ""
              ) : (
                <div className="mt-10">
                  <ul className="flex gap-2 items-center justify-center">
                    <li>
                      <button className="flex items-center justify-center size-10 border rounded-full border-LightGray">
                        <img
                          className="size-4"
                          src="./images/ico_chevron_left.png"
                          alt="Chevron Left"
                        />
                      </button>
                    </li>

                    <li>
                      <a className="flex items-center justify-center size-10 border bg-black text-white rounded-full border-LightGray hover:bg-black hover:text-white hover:cursor-pointer">
                        1
                      </a>
                    </li>

                    <li>
                      <a className="flex items-center justify-center size-10 border rounded-full border-LightGray hover:bg-black hover:text-white hover:cursor-pointer">
                        2
                      </a>
                    </li>

                    <li>
                      <a className="flex items-center justify-center size-10 border rounded-full border-LightGray hover:bg-black hover:text-white hover:cursor-pointer">
                        3
                      </a>
                    </li>

                    <li>
                      <a className="flex items-center justify-center size-10 border rounded-full border-LightGray hover:bg-black hover:text-white hover:cursor-pointer">
                        4
                      </a>
                    </li>

                    <li>
                      <button className="flex items-center justify-center size-10 border rounded-full border-LightGray">
                        <img
                          className="size-4"
                          src="./images/ico_chevron_right.png"
                          alt="Chevron Right"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <FaArrowAltCircleUp
        onClick={moveTop}
        className="fixed right-5 hover:text-white hover:bg-black rounded-full cursor-pointer transition-all duration-200"
        style={{
          fontSize: "50px",
          bottom: `${iconBottom}px`,
          position: "fixed",
        }}
      />
    </div>
  );
};

export default ListProduct;
