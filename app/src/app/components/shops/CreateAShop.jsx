import { useContext, useState } from "react";
import { UserContext } from "../../../src/context/UserContext";
import ShopsService from "../../../src/services/shops.service";
import { useNavigate } from "react-router-dom";

const CreateAshop = () => {
  const navigate = useNavigate();

  const [shop, setShop] = useState({});
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
    console.log(shop);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    shop.user = user._id;

    console.log(shop);
    try {
      await ShopsService.createShop(shop);
      navigate("/shops");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Create a Shop</h1>
      <form>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="enter a name"
        />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="enter a description"
        />
        <input
          type="text"
          name="logo"
          onChange={handleChange}
          placeholder="enter a link for a logo"
        />
        <input
          type="text"
          name="adress"
          onChange={handleChange}
          placeholder="enter an adress"
        />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
};

export default CreateAshop;
