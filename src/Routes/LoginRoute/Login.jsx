import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "./LoginFormValidation";
import { FiAlertCircle } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HelmetForSeo from "../../components/HelmetForSeo";
import LoginFormHeader from "../../components/login/LoginFormHeader";
import styles from "../SignupRoute/Signup.module.css";

const initialValues = {
  email: "",
  password: "",
};

let title = "Login Page";
let des = "this is a login page";

const Login = () => {
  let [passwordShow, setPassword] = useState(false);
  let navigate = useNavigate();

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <div className={styles.container}>
      <HelmetForSeo title={title} des={des} />
      <LoginFormHeader />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          {errors.email && touched.email && (
            <p>
              <FiAlertCircle className={"icon"} /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type={passwordShow ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          {errors.password && touched.password && (
            <p>
              <FiAlertCircle className={"icon"} /> {errors.password}
            </p>
          )}
        </div>

        <button type="submit">Log In</button>
        <p className={styles.links}>
          <Link to={"/signup"}>Create an account</Link>
        </p>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
