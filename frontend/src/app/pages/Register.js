import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import formStyles from "./form.module.css";
import styles from "./pages.module.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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

    if (password !== password2) {
      toast.error("passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.formPage}>
      <section className="heading">
        <h1>Register</h1>
      </section>
      <section className={formStyles.formContainer}>
        <p>Create a WishPad account</p>
        <form className={formStyles.form} onSubmit={onSubmit}>
          <input
            type="text"
            className={formStyles.control}
            id="name"
            name="name"
            value={name}
            placeholder="Name *"
            onChange={onChange}
          />
          <input
            type="text"
            className={formStyles.control}
            id="email"
            name="email"
            value={email}
            placeholder="Email address *"
            onChange={onChange}
          />
          <input
            type="text"
            className={formStyles.control}
            id="password"
            name="password"
            value={password}
            placeholder="Password *"
            onChange={onChange}
          />
          <input
            type="text"
            className={formStyles.control}
            id="password2"
            name="password2"
            value={password2}
            placeholder="Verify password *"
            onChange={onChange}
          />
          <input className={formStyles.btn} type="submit" />
        </form>
      </section>
    </div>
  );
}

export default Register;
