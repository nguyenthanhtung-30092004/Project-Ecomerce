import { useEffect, useState } from "react";
import apiServiceCategory from "../services/apiServicesCategoy";

const useFetchDataGetAllCategory = () => {
  const [categories, setCategories] = useState([]);
  const fetchDataCategory = async () => {
    const res = await apiServiceCategory.getAllCategory();
    if (res.length > 0) {
      setCategories(res);
    }
  };
  useEffect(() => {
    fetchDataCategory();
  }, []);
  return { categories };
};

export default useFetchDataGetAllCategory;
