import "./App.css";
import Login from "./pages/Login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainDashboard from "./pages/MainDashboard/MainDashboard";
import Invoice from "./pages/Invoice/Invoice";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="maindashboard" element={<MainDashboard />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
