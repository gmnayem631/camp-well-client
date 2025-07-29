import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://camp-well-server.vercel.app`,
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
