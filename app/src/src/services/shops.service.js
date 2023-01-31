import axios from "axios";

const API_URL = "http://localhost:8000/api/shops";

const getAll = async () => {
  try {
    const res = await axios.get(`${API_URL}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const createShop = async (credentials) => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(`${API_URL}`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const ShopsService = {
  getAll,
  createShop,
};

export default ShopsService;
