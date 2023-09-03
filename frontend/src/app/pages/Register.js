import { useState, useEffect } from "react";
import formStyles from "./form.module.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <section className="heading">
        <h1>Register</h1>
        <p>Please create a account</p>
      </section>
      <section>
        <form className={formStyles.form} onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
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
          <input
            type="text"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Enter your password2"
            onChange={onChange}
          />
        </form>
      </section>
    </div>
  );
}

export default Register;
