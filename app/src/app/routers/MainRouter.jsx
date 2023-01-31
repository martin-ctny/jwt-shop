import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../../src/context/UserContext";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AllShops from "../pages/shops/AllShops";

const MainRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />

        {!user && <Route path="/auth" element={<AuthPage />} />}
      </Routes>
    </>
  );
};

export default MainRouter;
