import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";

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
    <div className="page-container">
      <h1>Login</h1>
      <section className="login form_container">
        <p>Sign in to WishPad</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="form_container__control"
            id="email"
            name="email"
            value={email}
            placeholder="Email address *"
            onChange={onChange}
          />

          <input
            type="text"
            className="form_container__control"
            id="password"
            name="password"
            value={password}
            placeholder="Password *"
            onChange={onChange}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
