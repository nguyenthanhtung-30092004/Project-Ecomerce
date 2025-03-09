import React, { useEffect, useState } from "react";
import BannerTop from "../../components/Banners/BannerTop";
import SectionService from "../../components/Box-Services/SectionService";
import SectionOurCategory from "../../components/SectionOurCategory/SectionOurCategory";
import SectionBestseller from "../../components/SectionBestseller/SectionBestseller";
import { API_GET_ALL_PRODUCT } from "../../utils/constants/api";
import apiServiceProduct from "../../services/apiServicesProduct";
import SectionNewArrivals from "../../components/SectionNewArrivals/SectionNewArrivals";
import Experiencethebest from "../../components/Experiencethebest/Experiencethebest";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchDataGetAllProduct = async () => {
    const res = await apiServiceProduct.getAllProduct();
    setProducts(res.products);
  };
  useEffect(() => {
    fetchDataGetAllProduct();
  }, []);

  return (
    <>
      <BannerTop />
      <SectionService />
      <SectionOurCategory type={1} />
      <SectionBestseller products={products} />
      <SectionOurCategory type={2} />
      <Experiencethebest />
      <SectionNewArrivals products={products} />
    </>
  );
};

export default Home;
