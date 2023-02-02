import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopsService from "../../../src/services/shops.service";

const AllShopsFromUser = () => {
  const navigate = useNavigate();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetchAllShops();
  }, []);

  const fetchAllShops = async () => {
    try {
      const shops = await ShopsService.getAllFromUser();
      setShops(shops);
      console.log(shops);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e, id) => {
    e.preventDefault();
    try {
      await ShopsService.deleteShop(id);
      fetchAllShops();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {shops.map((shop) => (
        <div key={shop._id}>
          <img src={shop.logo} alt={shop.name} />
          <h2>{shop.name}</h2>
          <p>{shop.adress}</p>
          <p>{shop.description}</p>
          <button onClick={() => navigate(`/shops/${shop._id}`)}>update</button>
          <button onClick={(e) => handleClick(e, shop._id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default AllShopsFromUser;
