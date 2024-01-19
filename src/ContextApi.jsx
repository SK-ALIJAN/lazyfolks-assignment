import { createContext, useContext, useState } from "react";
import axios from "axios";

// creating context using CreateContext Method
let ContextApi = createContext(null);

let InitialState = {
  isLoading: false,
  data: {},
  isError: false,
  errorMessage: "",
};

// this is a context provider manage the data globally
export let ContextProvider = ({ children }) => {
  let [signup, setSignup] = useState(InitialState);

  const SignupToServer = async (newUser) => {
    let url = "https://dev-api.lazyfolks.in/accounts/signup/";
    try {
      setSignup((prev) => {
        return { ...prev, isLoading: true };
      });
      let { data } = await axios.post(url, newUser);
      if (data.message) {
        setSignup((prev) => {
          return {
            ...prev,
            isLoading: false,
            isError: true,
            data: {},
            errorMessage: data.message,
          };
        });
      } else {
        setSignup((prev) => {
          return {
            ...prev,
            isLoading: false,
            data: newUser,
            isError: false,
            errorMessage: "",
          };
        });
      }
    } catch (error) {
      setSignup((prev) => {
        return {
          ...prev,
          isLoading: false,
          isError: true,
          data: {},
          errorMessage: error.message,
        };
      });
    }
  };

  let data = { signup, SignupToServer };
  return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>;
};

// custom component of react
export let useContextApi = () => {
  return useContext(ContextApi);
};
