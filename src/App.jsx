import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Forget from "./pages/Forget";
import Profile from "./pages/Profile";
import ItemPreview from "./components/ItemPreview";

function App() {
  const RequireAuth = ({ children }) => {
    const currentUser = localStorage.getItem("useruid");
    return currentUser?.length>0 && currentUser !=undefined  ? children : <Navigate to="/signin" />;
  };
  return (
    <div className="w-[100%] flex justify-center h-[100vh] overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/preview" element={<ItemPreview />} />
          <Route path="/forgot" element={<Forget />} />
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/profile/:currentUser" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
