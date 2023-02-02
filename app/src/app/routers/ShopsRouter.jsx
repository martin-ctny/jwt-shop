import { Route, Routes } from "react-router-dom";
import AllShops from "../pages/shops/AllShops";
import MyShops from "../pages/shops/MyShops";
import NewShop from "../pages/shops/NewShop";
import SingleShop from "../pages/shops/SingleShop";
import UpdateShop from "../pages/shops/UpdateShop";
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
              <NewShop />
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
        <Route
          path="/shops/:id"
          element={
            <ProtectedRoute>
              <UpdateShop />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/shops/details/:id" element={<SingleShop />}></Route>
      </Routes>
    </>
  );
};

export default UserRouter;
