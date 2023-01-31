import instance from "./api.service";

const ENDPOINT = "/account";

const update = async (credentials) => {
  try {
    const res = await instance.put(`${ENDPOINT}`, credentials);
    return res.data;
  } catch (error) {
    alert("mot de passe incorrect");
    console.error(error);
  }
};
const updatePassword = async (credentials) => {
  try {
    const res = await instance.put(`${ENDPOINT}/password`, credentials);
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
