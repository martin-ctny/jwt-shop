import { useState } from "react";
import AuthService from "../../../src/services/auth.service";

const ForgotPassword = () => {
  const [credentials, setCredentials] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.resetPassword(credentials);
  };

  return (
    <form>
      <p>Entrez le mail de votre compte</p>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Rénitialisez le password</button>
    </form>
  );
};

export default ForgotPassword;
