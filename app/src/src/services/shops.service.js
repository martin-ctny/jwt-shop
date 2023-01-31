import instance from "./api.service";

const ENDPOINT = "/shops";

const getAll = async () => {
  try {
    const res = await instance.get(`${ENDPOINT}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const createShop = async (credentials) => {
  try {
    const res = await instance.post(`${ENDPOINT}`, credentials);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getAllFromUser = async () => {
  try {
    const res = await instance.get(`${ENDPOINT}/user`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getOne = async (id) => {
  try {
    const res = await instance.get(`${ENDPOINT}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const update = async (id, credentials) => {
  try {
    const res = await instance.put(`${ENDPOINT}/${id}`, credentials);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteShop = async (id) => {
  try {
    const res = await instance.delete(`${ENDPOINT}/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const ShopsService = {
  getAll,
  createShop,
  getAllFromUser,
  getOne,
  update,
  deleteShop,
};

export default ShopsService;
