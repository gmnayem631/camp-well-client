import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateCamp = () => {
  const { campId } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [camp, setCamp] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch existing camp data
  useEffect(() => {
    axiosSecure
      .get(`/update-camp/${campId}`)
      .then((res) => {
        setCamp(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Failed to load camp data", "error");
        setLoading(false);
      });
  }, [campId, axiosSecure]);

  // Handle update submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedCamp = {
      name: form.name.value,
      dateTime: form.dateTime.value,
      location: form.location.value,
      healthcareProfessional: form.healthcareProfessional.value,
      fees: parseFloat(form.fees.value),
      image: form.image.value,
      description: form.description.value,
    };

    try {
      await axiosSecure.patch(`/update-camp/${campId}`, updatedCamp);
      Swal.fire(
        "Updated!",
        "Camp information updated successfully.",
        "success"
      );
      navigate("/dashboard/manage-camps");
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to update camp", "error");
    }
  };

  if (loading || !camp)
    return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        Update Camp
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="name"
          defaultValue={camp.name}
          required
          placeholder="Camp Name"
          className="input input-bordered w-full"
        />
        <input
          name="dateTime"
          defaultValue={camp.dateTime}
          type="datetime-local"
          required
          className="input input-bordered w-full"
        />
        <input
          name="location"
          defaultValue={camp.location}
          required
          placeholder="Location"
          className="input input-bordered w-full"
        />
        <input
          name="healthcareProfessional"
          defaultValue={camp.healthcareProfessional}
          required
          placeholder="Doctor Name"
          className="input input-bordered w-full"
        />
        <input
          name="fees"
          defaultValue={camp.fees}
          required
          type="number"
          placeholder="Fees"
          className="input input-bordered w-full"
        />
        <input
          name="image"
          defaultValue={camp.image}
          required
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          defaultValue={camp.description}
          required
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          rows={4}
        />

        <button
          type="submit"
          className="btn btn-secondary text-white mt-4 w-full"
        >
          Update Camp
        </button>
      </form>
    </div>
  );
};

export default UpdateCamp;
