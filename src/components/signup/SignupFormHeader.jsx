import styles from "../FormHeader.module.css";

const SignupFormHeader = () => {
  return (
    <div className={styles.container}>
      <header>Start your Setapp membership</header>
      <div className={styles.icons}>
        <img
          src="https://my.setapp.com/static/media/apple.43f50e50.svg"
          alt="apple"
        />
        <img
          src="https://my.setapp.com/static/media/google.f77e4afd.svg"
          alt="google"
        />
      </div>

      <div className={styles.lines}>
        <div></div>
        <span>or sign up with email</span>
        <div></div>
      </div>
    </div>
  );
};

export default SignupFormHeader;
