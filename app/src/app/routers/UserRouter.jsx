import { Route, Routes } from "react-router-dom";

import ChangePassword from "../pages/user/ChangePassword";
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
              <ChangePassword />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default UserRouter;
