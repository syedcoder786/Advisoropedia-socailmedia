import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { FloatingLabel, Button, Alert, Spinner } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { login, reset } from "../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    // clearErrors,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [errmsg, setErrmsg] = useState("");

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const onSubmit = (data, e) => {
    e.preventDefault();
    // console.log(errors);
    console.log(data);

    dispatch(login(data));
  };

  const {
    user,
    isLoginLoading: isLoading,
    isLoginError: isError,
    isLoginSuccess: isSuccess,
    isLoginMessage: message,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      console.log("login/success");
      // navigate("/dashboard");
    }

    if (isError) {
      setErrmsg(message);
    }

    dispatch(reset());
  }, [isSuccess, isError, message]);

  return (
    <div className="text-center p-4 space-y-2 border-2 rounded md:w-2/3 mx-auto shadow-xl">
      <h1 className="text-3xl">Login</h1>
      <p className="text-sm text-slate-500">
        Connect with people in social media network!
      </p>
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errmsg && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {/* <span className="font-medium">Info alert!</span>{" "} */}
              {errmsg}
            </Alert>
          )}
          <FloatingLabel
            variant="outlined"
            label="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
            color={errors?.email ? "error" : "default"}
          />
          {errors.email && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {errors.email.message}
            </Alert>
          )}
          <div className="relative">
            <FloatingLabel
              variant="outlined"
              label="Password"
              type={isPasswordVisible ? "password" : "text"}
              {...register("password", {
                required: "Password is required",
                // minLength: { value: 6, message: "Min length of password is 6" },
              })}
              color={errmsg ? "error" : "default"}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* {errors.password && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {errors.password.message}
            </Alert>
          )} */}

          <div className="text-left mb-2 mx-1">
            Create an account?{" "}
            <Link to="/">
              <span className="underline font-semibold text-gray-600">
                Signup
              </span>
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full"
            // onClick={handleSubmit(onSubmit)}
          >
            {isLoading && (
              <Spinner
                aria-label="Spinner button example"
                size="md"
                className="mr-2"
              />
            )}
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
