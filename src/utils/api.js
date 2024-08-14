import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getById = async (endpoint, id) => {
  try {
    const response = await api.get(endpoint,id);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const put = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const remove = async (endpoint,id) => {
    try {
        const response = await api.delete(endpoint,id);
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}


