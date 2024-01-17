import * as Yup from "yup";

export const signupSchema = Yup.object({
  phone: Yup.string()
    .min(10, "enter 10 digit number")
    .required("please enter phone number"),
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter your password"),
});
