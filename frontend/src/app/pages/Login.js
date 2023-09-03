import { useState, useEffect } from "react";
import formStyles from "./form.module.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      email: "",
      password: "",
    }));
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
