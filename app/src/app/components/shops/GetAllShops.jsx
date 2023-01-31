import { useEffect, useState } from "react";
import ShopsService from "../../../src/services/shops.service";

const GetAllShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    console.log("oui");
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
          <img src={shop.image} alt={shop.name} />
          <h2>{shop.name}</h2>
          <p>{shop.address}</p>
          <p>{shop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GetAllShops;
