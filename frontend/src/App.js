import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./app/pages/Dashboard";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";

function App() {
  // const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <div className="container">
          <h1>Dawn's App</h1>
          <Header />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
