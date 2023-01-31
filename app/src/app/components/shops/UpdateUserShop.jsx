import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ShopsService from "../../../src/services/shops.service";
import { useNavigate } from "react-router-dom";

const UpdateUserShop = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const [shop, setShop] = useState({});

  useEffect(() => {
    fetchOneShop();
  }, [id]);

  const fetchOneShop = async () => {
    try {
      const shops = await ShopsService.getOne(id);
      console.log("shop", shops);
      setShop(shops);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
    console.log(shop);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await ShopsService.update(id, shop);
      navigate("/account/my-shops");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form action="">
        <div>
          <p>logo :</p>
          <input
            onChange={handleChange}
            type="text"
            name="logo"
            value={shop.logo}
          />
        </div>
        <div>
          <p>name :</p>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={shop.name}
          />
        </div>
        <div>
          <p>adress :</p>
          <input
            onChange={handleChange}
            type="text"
            name="adress"
            value={shop.adress}
          />
        </div>
        <div>
          <p>description :</p>
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={shop.description}
          />
        </div>

        <button onClick={handleClick}>Validé</button>
      </form>
    </div>
  );
};

export default UpdateUserShop;
