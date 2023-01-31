import { useContext } from "react";
import { UserContext } from "../../../src/context/UserContext";

const MyShops = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>My Shops</h1>
      {user.shops.map((shop) => {
        return (
          <div key={shop._id}>
            <h2>{shop.name}</h2>
            <img src={shop.logo} alt={shop.name} />
            <p>{shop.description}</p>
            <p>{shop.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyShops;
