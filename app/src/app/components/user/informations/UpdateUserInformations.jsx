import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../src/context/UserContext";
import TokenService from "../../../../src/services/token.service";
import UserService from "../../../../src/services/user.service";

const UpdateUserInformations = ({ setUpdate, update }) => {
  const { user, setUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState({});

  useEffect(() => {
    setCredentials(user);
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await UserService.update(credentials);
      localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", accessToken);
      const newUser = TokenService.getUserFromLocalToken();
      setUser(newUser);
      setUpdate(!update);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="">
      <p>{user.email}</p>
      <div>
        <p>Prénom :</p>
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          value={credentials.firstName}
        />
      </div>
      <div>
        <p>Nom :</p>
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={credentials.lastName}
        />
      </div>
      <div>
        <p>Entrée votre mot de passe :</p>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
      </div>

      <button onClick={handleClick}>Validé</button>
    </form>
  );
};

export default UpdateUserInformations;
