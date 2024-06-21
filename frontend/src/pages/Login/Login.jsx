import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { LinearProgress } from "@mui/material";
import { LuAtSign } from "react-icons/lu";
import { GoLock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";
import { handleChange } from "../../utility/handleChange";
import { loginUser } from "./LoginHelperFunctions";

/**
 * Login component representing the Login page.
 * @returns {JSX.Element} Login JSX element
 */
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  /**
   * Handles the form submission for logging in the user.
   *
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userData, setIsLoading, rememberMe, setUserData, navigate);
  };

  /**
   * Toggles rememberMe
   */
  const handleRememberMe = () => setRememberMe(!rememberMe);

  return (
    <div className={styles.container}>
      <div className={styles.loginFormContainer}>
        <h1 className={styles.formTitle}>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.flexColumn}>
            <label>Email</label>
          </div>
          <div className={styles.inputForm}>
            <LuAtSign className={styles.mailIcon} />
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your Email"
              name="email"
              value={userData.email}
              onChange={(event) => handleChange(event, setUserData)}
              required
            />
          </div>

          <div className={styles.flexColumn}>
            <label>Password</label>
          </div>
          <div className={styles.inputForm}>
            <GoLock className={styles.icon} />
            <input
              type="password"
              className={styles.input}
              placeholder="Enter your Password"
              name="password"
              value={userData.password}
              onChange={(event) => handleChange(event, setUserData)}
              required
            />
          </div>

          <div className={styles.flexRow}>
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                value={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <span className={styles.span}>Forgot password?</span>
          </div>
          {isLoading && (
            <div style={{ marginTop: "10px" }}>
              <LinearProgress color="success" />
            </div>
          )}
          <button className={styles.buttonSubmit}>Log In</button>
          <p className={styles.p}>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.link}>
              Sign Up
            </Link>
          </p>
          <p className={`${styles.p} ${styles.line}`}>Or With</p>
          <div className={styles.flexRow}>
            <button className={styles.btn} disabled>
              <FcGoogle className={styles.GoogleIcon} />
            </button>
            <button className={styles.btn} disabled>
              <FaLinkedinIn className={styles.linkedInIcon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
