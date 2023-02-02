import { useState } from "react";
import { useParams } from "react-router-dom";
import AuthService from "../../../src/services/auth.service";
import { useNavigate } from "react-router-dom";

const PwReset = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
    console.log(password);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      password.token = id;
      await AuthService.updatePassword(id, password);
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="">
      <p>Entrez le nouveau mot de passe</p>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="new password"
      />
      {/* <p>Verifiez votre mot de passe</p>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="new password"
      />{" "} */}
      <button onClick={handleClick}>Validez</button>
    </form>
  );
};

export default PwReset;
