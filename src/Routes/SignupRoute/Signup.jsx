import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "./SignupFormValidation";
import { FiAlertCircle } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HelmetForSeo from "../../components/HelmetForSeo";
import { FaLock, FaLockOpen } from "react-icons/fa6";
import SignupFormHeader from "../../components/signup/SignupFormHeader";
import styles from "./Authentication.module.css";
import { useContextApi } from "../../ContextApi";

const initialValues = {
  phone: "",
  email: "",
  password: "",
};

let title = "Signup Page";
let des = "this is a Signup page";

const Signup = () => {
  let navigate = useNavigate();
  let [passwordShow, setPasswordShow] = useState(false);
  let { signup, SignupToServer } = useContextApi();
  let { isLoading, isError, errorMessage } = signup;
  let errorRef = useRef(false);

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        errorRef.current = false;
        SignupToServer(values);
        action.resetForm();
      },
    });

  let handlePassword = () => {
    setPasswordShow(!passwordShow);
  };

  useEffect(() => {
    if (isError && errorRef.current == false) {
      toast.warn(errorMessage);
      errorRef.current = true;
    }
  }, [isError]);

  return (
    <div className={styles.container}>
      <HelmetForSeo title={title} des={des} />
      <SignupFormHeader />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div>
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {errors.phone && touched.phone && (
            <p>
              <FiAlertCircle className={"icon"} /> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          {errors.email && touched.email && (
            <p>
              <FiAlertCircle className={"icon"} />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type={passwordShow ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          <div className={styles.passwordShow}>
            {passwordShow ? (
              <FaLockOpen onClick={handlePassword} />
            ) : (
              <FaLock onClick={handlePassword} />
            )}
          </div>

          {errors.password && touched.password && (
            <p>
              <FiAlertCircle className={"icon"} />
              {errors.password}
            </p>
          )}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait ..." : " Continue"}
        </button>

        <p className={styles.links}>
          Got an account? <Link to={"/login"}>Sign in</Link>
        </p>
      </form>

      <ToastContainer />

      {isLoading && <div className={styles.loading}></div>}
    </div>
  );
};

export default Signup;
