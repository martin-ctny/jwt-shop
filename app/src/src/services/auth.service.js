import instance from "./api.service";

const ENDPOINT = "/auth";

const signup = async (credentials) => {
  const response = await instance.post(`${ENDPOINT}/signup`, credentials);
  return response.data;
};

const signin = async (credentials) => {
  const response = await instance.post(`${ENDPOINT}/signin`, credentials);
  return response.data;
};

const resetPassword = async (credentials) => {
  const response = await instance.post(
    `${ENDPOINT}/forgot-password`,
    credentials
  );
  return response.data;
};

const updatePassword = async (id, credentials) => {
  const response = await instance.post(
    `${ENDPOINT}/reset-password/${id}`,
    credentials
  );
  return response.data;
};

const AuthService = {
  signup,
  signin,
  resetPassword,
  updatePassword,
};

export default AuthService;
