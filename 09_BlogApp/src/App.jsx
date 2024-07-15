import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { Header, Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login(userData)) : dispatch(logout(userData));
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen w-full flex bg-gray-400">
      <div className="w-full">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <h1>Hang On!! Loading....</h1>
  );
}

export default App;
