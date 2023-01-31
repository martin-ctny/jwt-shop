import axios from "axios";

const API_URL = "http://localhost:8000/api";

const update = async (credentials) => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await axios.put(`${API_URL}/account`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("mot de passe incorrect");
    console.error(error);
  }
};
const updatePassword = async (credentials) => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await axios.put(`${API_URL}/account/password`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    alert("mot de passe incorrect");
    console.error(error);
  }
};
const UserService = {
  update,
  updatePassword,
};

export default UserService;
