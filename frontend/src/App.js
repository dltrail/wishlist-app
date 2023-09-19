import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./app/pages/Dashboard/Dashboard";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import styles from "./App.module.scss";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <div className={styles.container}>
          <Header />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      <ThemeSwitcher />
    </>
  );
}

export default App;
