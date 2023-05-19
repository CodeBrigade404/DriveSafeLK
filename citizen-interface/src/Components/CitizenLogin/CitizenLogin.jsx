import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:1671/login";
      const { data: res } = await axios.post(url, data);
      const { token } = res.data;
      sessionStorage.setItem("token", token);

      const decoded = jwt_decode(token);
      const expiryTime = new Date(Date.now() + 50 * 60 * 1000); // 20 minutes from now

      document.cookie = `userData=${JSON.stringify(decoded)}; path=/; expires=${expiryTime.toUTCString()};`;
      

      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
        <h1 className=' absolute mt-5 ml-16 text-5xl text-[#405C5C] font-bruno'>Drive Safe</h1>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
