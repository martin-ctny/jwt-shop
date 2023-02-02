import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../src/context/UserContext";
import NewPassword from "../pages/auth/NewPassword";
import AuthPage from "../pages/auth/AuthPage";
import ResetPassword from "../pages/auth/ResetPassword";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const MainRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />

        {!user && <Route path="/auth" element={<AuthPage />} />}
        {!user && (
          <Route path="/auth/forgot-password" element={<ResetPassword />} />
        )}
        {!user && <Route path="/reset/:id" element={<NewPassword />} />}
      </Routes>
    </>
  );
};

export default MainRouter;
