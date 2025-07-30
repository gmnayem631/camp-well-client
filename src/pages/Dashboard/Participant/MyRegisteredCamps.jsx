import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaCreditCard, FaTrash } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyRegisteredCamps = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(registrations);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`/participants?email=${user.email}`)
      .then((res) => {
        setRegistrations(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch registrations:", err);
      })
      .finally(() => setLoading(false));
  }, [axios, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity w-20 h-20"></span>
      </div>
    );
  }

  if (registrations.length === 0) {
    return (
      <div className="text-center mt-10">
        You have not joined any camps yet.
      </div>
    );
  }

  const handlePay = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove your registration permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/participants/${id}`)
          .then(() => {
            setRegistrations((prev) => prev.filter((item) => item._id !== id));
            Swal.fire(
              "Deleted!",
              "Your registration has been deleted.",
              "success"
            );
          })
          .catch((err) => {
            console.error("Failed to delete registration:", err);
            Swal.fire("Error", "Something went wrong while deleting.", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Registered Camps</h2>
      <table className="table w-full border">
        <thead>
          <tr>
            <th>Camp Name</th>
            <th>Camp Fee</th>
            <th>Participant Name</th>
            <th>Participant Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg._id}>
              <td>{reg.campName}</td>
              <td>${reg.campFees}</td>
              <td>{reg.participantName}</td>
              <td>{reg.participantEmail}</td>
              <td className="flex justify-center space-x-4">
                <button
                  title="Pay"
                  className="text-success hover:cursor-pointer"
                  onClick={() => handlePay(reg.campId)}
                >
                  <FaCreditCard size={22} />
                </button>
                <button
                  title="Delete"
                  className="text-error hover:cursor-pointer"
                  onClick={() => handleDelete(reg._id)}
                >
                  <FaTrash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRegisteredCamps;
