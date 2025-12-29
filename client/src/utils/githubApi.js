import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/algorithms`;

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const fetchAlgorithmsInCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/${category}`);
  return response.data;
};

export const fetchAlgorithmDetails = async (category, algorithm) => {
  const response = await axios.get(`${BASE_URL}/${category}/${algorithm}`);
  return response.data;
};
