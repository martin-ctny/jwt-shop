import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../src/context/UserContext";
import AuthService from "../../../src/services/auth.service";
import TokenService from "../../../src/services/token.service";
import UserAuthInputs from "../user/form/UserAuthInputs";

const Signin = () => {
  const [credentials, setCredentials] = useState({});
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await AuthService.signin(credentials);
      TokenService.setTokenInLocalStorage(accessToken);
      const user = TokenService.getUserFromLocalToken();
      console.log(user);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserAuthInputs handleChange={handleChange} />
      <div>
        <input type="submit" value="Signin" />
      </div>
    </form>
  );
};

export default Signin;
