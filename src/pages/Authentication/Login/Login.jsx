import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // Firebase logic will be added later
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Placeholder login
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white space-y-4">
        <h2 className="text-3xl font-bold text-center text-primary">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label font-medium text-neutral">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-medium text-neutral">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            {errors.password?.type === "required" && (
              <p className="text-error text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-error text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full text-base-100 text-lg mt-2">
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            state={{ from }}
            className="text-secondary font-semibold"
          >
            Register
          </Link>
        </p>

        {/* Social Login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
