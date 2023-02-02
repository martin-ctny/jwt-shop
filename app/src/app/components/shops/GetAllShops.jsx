import { useEffect, useState } from "react";
import ShopsService from "../../../src/services/shops.service";
import { useNavigate } from "react-router-dom";

const GetAllShops = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetchShops();
  }, []);

  const fetchShops = async () => {
    try {
      const shops = await ShopsService.getAll();
      setShops(shops);
      console.log(shops);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {shops.map((shop) => (
        <div key={shop.id}>
          <img src={shop.logo} alt={shop.name} />
          <h2>{shop.name}</h2>
          <p>{shop.adress}</p>
          <p>{shop.description}</p>
          <button onClick={() => navigate(`/shops/details/${shop._id}`)}>
            Détails
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetAllShops;
