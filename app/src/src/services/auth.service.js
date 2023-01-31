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

const AuthService = {
  signup,
  signin,
};

export default AuthService;
