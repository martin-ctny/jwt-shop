import { Route, Routes } from "react-router-dom";
import CreateAshop from "../components/shops/CreateAShop";
import AllShops from "../pages/shops/AllShops";
import MyShops from "../pages/shops/MyShops";
import ProtectedRoute from "./ProtectedRoute";

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/all-shops" element={<AllShops />}></Route>
        <Route
          path="/create-shop"
          element={
            <ProtectedRoute>
              <CreateAshop />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/account/my-shops"
          element={
            <ProtectedRoute>
              <MyShops />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default UserRouter;
