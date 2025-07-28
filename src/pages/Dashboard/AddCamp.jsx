import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddCamp = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newCamp = {
      id: `CAMP${Date.now().toString().slice(-6)}`,
      name: data.name,
      image: data.image,
      fees: parseFloat(data.fees),
      dateTime: data.dateTime,
      location: data.location,
      healthcareProfessional: data.healthcareProfessional,
      participantCount: 0,
      description: data.description,
    };

    try {
      const res = await axiosSecure.post("/camps", newCamp);
      if (res.data.insertedId) {
        toast.success("Camp added successfully!");
        reset();
      } else {
        toast.error("Failed to add camp");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-base-100 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Add A Camp
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Form Fields */}
        <div>
          <label className="label">Camp Name</label>
          <input
            type="text"
            {...register("name", { required: "Camp name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && (
            <p className="text-error text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-error text-sm">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="label">Fees ($)</label>
          <input
            type="number"
            {...register("fees", { required: "Fees are required", min: 0 })}
            className="input input-bordered w-full"
          />
          {errors.fees && (
            <p className="text-error text-sm">{errors.fees.message}</p>
          )}
        </div>

        <div>
          <label className="label">Date & Time</label>
          <input
            type="datetime-local"
            {...register("dateTime", { required: "Date & time is required" })}
            className="input input-bordered w-full"
          />
          {errors.dateTime && (
            <p className="text-error text-sm">{errors.dateTime.message}</p>
          )}
        </div>

        <div>
          <label className="label">Location (District)</label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            className="input input-bordered w-full"
          />
          {errors.location && (
            <p className="text-error text-sm">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label className="label">Healthcare Professional</label>
          <input
            type="text"
            {...register("healthcareProfessional", {
              required: "Healthcare Professional is required",
            })}
            className="input input-bordered w-full"
          />
          {errors.healthcareProfessional && (
            <p className="text-error text-sm">
              {errors.healthcareProfessional.message}
            </p>
          )}
        </div>

        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full"
            rows="4"
          />
          {errors.description && (
            <p className="text-error text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-secondary text-white">
            Add Camp
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddCamp;
