import { useState, useEffect } from "react";
import formStyles from "./form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, message, isError, isSuccess, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="register">
      <section className="heading">
        <h1>Login</h1>
        <p>Login into your account</p>
      </section>
      <section>
        <form className={formStyles.form} onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email address"
            onChange={onChange}
          />

          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />

          <input type="submit" onClick={onSubmit} />
        </form>
      </section>
    </div>
  );
}

export default Login;
