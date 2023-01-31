import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./src/context/UserContext";
import { useContext, useEffect } from "react";
import TokenService from "./src/services/token.service";
import MainLayout from "./app/layouts/MainLayout";
import MainRouter from "./app/routers/MainRouter";
import UserRouter from "./app/routers/UserRouter";
import ShopsRouter from "./app/routers/ShopsRouter";

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const user = TokenService.getUserFromLocalToken();
    setUser(user);
  }, []);

  return (
    <BrowserRouter>
      <MainLayout>
        <MainRouter />
        <UserRouter />
        <ShopsRouter />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
