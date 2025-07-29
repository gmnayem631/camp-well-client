import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [camps, setCamps] = useState([]);

  // Load organizer's camps
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/organizer-camps?email=${user.email}`)
        .then((res) => {
          setCamps(res.data);
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to load camps.");
        });
    }
  }, [user, axiosSecure]);

  // Delete a camp
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/delete-camp/${id}`);
        setCamps((prev) => prev.filter((camp) => camp._id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Camp has been deleted.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (err) {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete camp.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        Manage Your Camps
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full text-sm">
          <thead>
            <tr className="bg-base-200">
              <th>Name</th>
              <th>Date & Time</th>
              <th>Location</th>
              <th>Doctor</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp) => (
              <tr key={camp._id}>
                <td>{camp.name}</td>
                <td>{new Date(camp.dateTime).toLocaleString()}</td>
                <td>{camp.location}</td>
                <td>{camp.healthcareProfessional}</td>
                <td className="flex flex-wrap gap-2 justify-center py-2">
                  <Link
                    to={`/dashboard/update-camp/${camp._id}`}
                    className="btn btn-sm btn-outline btn-info hover:text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(camp._id)}
                    className="btn btn-sm btn-outline btn-error hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {camps.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No camps created yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCamps;
