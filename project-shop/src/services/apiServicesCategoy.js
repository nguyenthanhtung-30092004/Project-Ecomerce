import axios from "axios";
import {
  API_CATEGORY,
  API_GET_ALL_PRODUCT,
  API_GET_PRODUCT_BY_CATEGORY,
} from "../utils/constants/api";

const apiServiceCategory = {
  getAllCategory: async () => {
    const res = await axios.get(API_CATEGORY);
    return res.data;
  },
  getDetailProduct: async (id) => {
    const res = await axios.get(`${API_GET_ALL_PRODUCT}/${id}`);
    return res;
  },
  getProductByCategory: async (category) => {
    const res = await axios.get(`${API_GET_PRODUCT_BY_CATEGORY}/${category}`);
    return res;
  },
};

export default apiServiceCategory;
