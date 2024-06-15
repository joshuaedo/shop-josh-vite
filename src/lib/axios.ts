import axios from 'axios';

const baseURL = import.meta.env.VITE_SHOP_API_URL;
const Authorization = import.meta.env.VITE_SHOP_API_KEY;
const shopId = import.meta.env.VITE_SHOP_ID;

const axiosShopInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization,
  },
});

export { baseURL, shopId, axiosShopInstance };
