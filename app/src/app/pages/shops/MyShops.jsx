import { useContext } from "react";
import { UserContext } from "../../../src/context/UserContext";
import AllShopsFromUser from "../../components/shops/AllShopsFromUser";

const MyShops = () => {
  return (
    <div>
      <h1>My Shops</h1>
      <AllShopsFromUser />
    </div>
  );
};

export default MyShops;
