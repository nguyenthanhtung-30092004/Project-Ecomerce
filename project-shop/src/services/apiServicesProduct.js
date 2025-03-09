import axios from "axios";
import { API_GET_ALL_PRODUCT } from "../utils/constants/api";

const apiServiceProduct = {
  getAllProduct: async () => {
    const res = await axios.get(API_GET_ALL_PRODUCT);
    return res.data;
  },

  getProduct: async () => {
    const res = await axios.get(`${API_GET_ALL_PRODUCT}?limit=10`);
    return res.data;
  },
};

export default apiServiceProduct;
