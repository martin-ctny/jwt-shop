import { Route, Routes } from "react-router-dom";
import UpdateUserPassword from "../components/user/informations/UpdateUserPassword";
import Account from "../pages/user/Account";
import ProtectedRoute from "./ProtectedRoute";

const UserRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/change-password"
          element={
            <ProtectedRoute>
              <UpdateUserPassword />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default UserRouter;
