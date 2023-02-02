import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopsService from "../../../src/services/shops.service";
import { useNavigate } from "react-router-dom";

const GetSingleShop = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [shop, setShop] = useState({});
  console.log(id);

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

  return (
    <div>
      <img src={shop.logo} alt={shop.name} />
      <h2>{shop.name}</h2>
      <p>{shop.adress}</p>
      <p>{shop.description}</p>
      <button onClick={() => navigate(`/all-shops`)}>Exit</button>
    </div>
  );
};

export default GetSingleShop;
