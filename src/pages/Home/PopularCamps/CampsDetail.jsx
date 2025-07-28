import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { useForm } from "react-hook-form";
import camps from "../../../../public/camps.json";
import useAuth from "../../../hooks/useAuth";

const CampDetails = () => {
  const { campId } = useParams();
  const { user } = useAuth();

  const camp = camps.find((c) => String(c.id) === campId);

  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!camp) {
    return (
      <div className="max-w-lg mx-auto p-8 mt-20 bg-accent rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-error">Camp Not Found</h2>
        <p className="mb-6 text-neutral">
          Sorry, the camp you are looking for does not exist.
        </p>
        <Link to="/available-camps" className="btn btn-secondary text-white">
          Back to Camps
        </Link>
      </div>
    );
  }

  const onSubmit = (data) => {
    const participantData = {
      campId: camp.id,
      campName: camp.name,
      campFees: camp.fees,
      location: camp.location,
      healthcareProfessional: camp.healthcareProfessional,
      participantName: user?.displayName || "",
      participantEmail: user?.email || "",
      age: data.age,
      phone: data.phone,
      gender: data.gender,
      emergencyContact: data.emergencyContact,
    };

    console.log("Participant Registration Data:", participantData);
    setModalOpen(false);
    reset();
  };

  return (
    <>
      <section className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-primary">{camp.name}</h1>
        <img
          src={camp.image}
          alt={camp.name}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <p className="mb-2">
          <span className="font-semibold">Fees:</span> ${camp.fees}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Date & Time:</span> {camp.dateTime}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Location:</span> {camp.location}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Healthcare Professional:</span>{" "}
          {camp.healthcareProfessional}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Participants:</span>{" "}
          {camp.participantCount}
        </p>
        <p className="mb-6">{camp.description}</p>
        <div className="flex justify-between">
          <button
            className="btn btn-secondary text-white"
            onClick={() => setModalOpen(true)}
          >
            Join Camp
          </button>
          <Link
            to={"/available-camps"}
            className="btn btn-secondary text-white"
          >
            Back to Available Camps
          </Link>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <>
          <input
            type="checkbox"
            id="join-camp-modal"
            className="modal-toggle"
            checked={modalOpen}
            readOnly
          />
          <div className="modal modal-open">
            <div className="modal-box max-w-lg relative">
              <h3 className="text-lg font-bold mb-4">
                Register for {camp.name}
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Read-only fields */}
                {[
                  { label: "Camp Name", value: camp.name },
                  { label: "Camp Fees", value: `$${camp.fees}` },
                  { label: "Location", value: camp.location },
                  {
                    label: "Healthcare Professional",
                    value: camp.healthcareProfessional,
                  },
                  { label: "Participant Name", value: user?.displayName || "" },
                  { label: "Participant Email", value: user?.email || "" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <label className="label font-semibold">{label}</label>
                    <input
                      type="text"
                      value={value}
                      readOnly
                      className="input input-bordered w-full bg-gray-100"
                    />
                  </div>
                ))}

                {/* Input fields */}
                <div>
                  <label className="label font-semibold" htmlFor="age">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    {...register("age", {
                      required: "Age is required",
                      min: 0,
                    })}
                    className={`input input-bordered w-full ${
                      errors.age ? "input-error" : ""
                    }`}
                  />
                  {errors.age && (
                    <p className="text-error text-sm mt-1">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label font-semibold" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className={`input input-bordered w-full ${
                      errors.phone ? "input-error" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-error text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label font-semibold" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    id="gender"
                    {...register("gender", { required: "Gender is required" })}
                    className={`select select-bordered w-full ${
                      errors.gender ? "select-error" : ""
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-error text-sm mt-1">
                      {errors.gender.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="label font-semibold"
                    htmlFor="emergencyContact"
                  >
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    id="emergencyContact"
                    {...register("emergencyContact", {
                      required: "Emergency contact is required",
                    })}
                    className={`input input-bordered w-full ${
                      errors.emergencyContact ? "input-error" : ""
                    }`}
                  />
                  {errors.emergencyContact && (
                    <p className="text-error text-sm mt-1">
                      {errors.emergencyContact.message}
                    </p>
                  )}
                </div>

                {/* Modal actions */}
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setModalOpen(false);
                      reset();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CampDetails;
