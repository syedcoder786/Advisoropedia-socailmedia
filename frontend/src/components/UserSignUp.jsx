import { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { FloatingLabel, Button, Alert, Spinner } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { registerUser, reset } from "../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserSignUp = () => {
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

  const onSubmit = async (data) => {
    // console.log(errors);
    console.log(data);

    dispatch(registerUser(data));
  };

  const {
    user,
    isRegisterLoading: isLoading,
    isRegisterError: isError,
    isRegisterSuccess: isSuccess,
    isRegisterMessage: message,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      console.log("register/success");
      toast.success("Welcome");
      // navigate("/");
    }

    if (isError) {
      setErrmsg(message);
    }

    dispatch(reset());
  }, [isSuccess, isError, message]);

  return (
    <div className="text-center p-4 space-y-2 border-2 rounded md:w-2/3 mx-auto shadow-xl">
      <h1 className="text-3xl">SignUp</h1>
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
            label="Email*"
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
              {/* <span className="font-medium">Info alert!</span>{" "} */}
              {errors.email.message}
            </Alert>
          )}
          <div className="relative">
            <FloatingLabel
              variant="outlined"
              label="Password*"
              type={isPasswordVisible ? "password" : "text"}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min length of password is 6" },
              })}
              color={errors?.password ? "error" : "default"}
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

          {errors.password && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {/* <span className="font-medium">Info alert!</span>{" "} */}
              {errors.password.message}
            </Alert>
          )}

          <FloatingLabel
            variant="outlined"
            label="Rewrie Password*"
            type="password"
            {...register("confirm_password", {
              required: "Confirm Password is required",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
            color={errors?.confirm_password ? "error" : "default"}
          />

          {errors.confirm_password && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {/* <span className="font-medium">Info alert!</span>{" "} */}
              {errors.confirm_password.message}
            </Alert>
          )}

          <FloatingLabel
            variant="outlined"
            label="Name"
            type="text"
            {...register("name", {
              // required: "name is required",
              minLength: { value: 3, message: "Min length of name is 3" },
            })}
            color={errors?.name ? "error" : "default"}
          />

          {errors.name && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {/* <span className="font-medium">Info alert!</span>{" "} */}
              {errors.name.message}
            </Alert>
          )}

          <FloatingLabel
            variant="outlined"
            label="Profile Image URL"
            type="text"
            {...register("profile_img", {})}
          />

          <div class="flex items-start my-4 mx-1">
            <div class="flex items-center h-5">
              <input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-0  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
                {...register("checkbox", {
                  required: "Accept terms and condition",
                  // minLength: { value: 6, message: "Min length of password is 6" },
                })}
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                for="newsletter"
                class="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions*
                </a>
              </label>
            </div>
          </div>

          {errors.checkbox && (
            <Alert color="failure" icon={HiInformationCircle} className="mb-4">
              {/* <span className="font-medium">Info alert!</span>{" "} */}
              {errors.checkbox.message}
            </Alert>
          )}

          <div className="text-left mb-2 mx-1">
            Already have a account?{" "}
            <Link to="/login">
              <span className="underline font-semibold text-gray-600">
                Login
              </span>
            </Link>
          </div>

          <Button type="submit" className="w-full">
            {isLoading && (
              <Spinner
                aria-label="Spinner button example"
                size="md"
                className="mr-2"
              />
            )}
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
