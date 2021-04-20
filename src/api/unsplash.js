import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VWiQ0AD7pRwLBlC5M5R5-FX1qpyZ9Hxn2jECspeGSIE",
  },
});
