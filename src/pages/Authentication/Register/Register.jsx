import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { name, email, password } = data;

    createUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name })
          .then(() => navigate(from))
          .catch((err) => console.error("Profile update failed", err));
      })
      .catch((err) => console.error("User creation failed", err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 md:p-10 border">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#fd8087]">
          Create an Account
        </h2>
        <p className="text-center text-[#007d8a] mb-6 mt-2">Join CampWell</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            {errors.password?.type === "required" && (
              <p className="text-sm text-red-500 mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-sm text-red-500 mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 bg-[#fd8087] border-none text-white hover:bg-[#fc6871]"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#007d8a] font-semibold">
              Login
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
