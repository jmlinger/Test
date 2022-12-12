import axios from 'axios';
import { backUri, frontUri } from '../utils/dynamicRoutes';

const globalApiVariables = () => {
  const { id: userId, token } = JSON.parse(localStorage.getItem('user'));
  
  const config = {
    headers: {
      authorization: token,
    },
  };
  return { userId, config };
}

const invalidTokenCaseError = ({ message }) => {
  if (message === 'Request failed with status code 401') {
    localStorage.clear()

    return window.location.replace(frontUri)
  }
}

const apiLogin = async (user) => {
  try {
    const url = `${backUri}login`;
    const fetchApi = await axios.post(url, user);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
}

const apiCreateUser = async (newUser) => {
  try {
    const url = `${backUri}register`;

    const fetchApi = await axios.post(url, newUser);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
}

const apiGetProducts = async () => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}customer/products`;

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    console.log(error)
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiGetOrdersByUser = async () => {
  try {
    const { userId, config } = globalApiVariables();
    const url = `${backUri}customer/order/${userId}`;

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiGetOrderById = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}customer/order/sales/${id}`;

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiGetSellers = async () => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}register`;
    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiCreateOrder = async (order) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}customer/order`;

    const fetchAPI = await axios.post(url, order, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiCreateUserByAdmin = async (newUser) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}adminRegister`;

    const fetchAPI = await axios.post(url, newUser, config);
    const response = await fetchAPI.data;
    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiGetUsers = async () => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}adminRegister`;

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

const apiRemoveUser = async (id) => {
  try {
    const { config } = globalApiVariables();

    const url = `${backUri}adminRegister/${id}`;

    const noData = null;

    const fetchApi = await axios.delete(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

export {
  apiLogin,
  apiCreateUser,
  apiGetProducts,
  apiGetOrdersByUser,
  apiGetOrderById,
  apiGetSellers,
  apiCreateOrder,
  apiCreateUserByAdmin,
  apiGetUsers,
  apiRemoveUser,
};
