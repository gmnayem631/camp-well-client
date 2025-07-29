import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ManageRegistered = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get("/api/registrations")
      .then((res) => {
        setRegistrations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch registrations:", err);
        setError("Failed to load registrations");
        setLoading(false);
      });
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.patch(`/api/registrations/${id}`, { status: newStatus });

      // Update UI immediately
      setRegistrations((prev) =>
        prev.map((reg) =>
          reg._id === id ? { ...reg, status: newStatus } : reg
        )
      );

      // Show alert based on status
      if (newStatus === "confirmed") {
        Swal.fire({
          title: "Registration Confirmed!",
          text: "Participant has been successfully added.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else if (newStatus === "cancelled") {
        Swal.fire({
          title: "Registration Cancelled",
          text: "Participant's registration has been cancelled.",
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    } catch (err) {
      console.error("Failed to update status", err);
      alert("Something went wrong while updating status");
    }
  };

  if (loading)
    return (
      <p className="text-center text-lg font-medium">
        Loading registrations...
      </p>
    );
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        All Camp Registrations
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Camp Name</th>
              <th className="p-3 text-left">Participant Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{reg.campName}</td>
                <td className="p-3">{reg.participantName}</td>
                <td className="p-3">{reg.participantEmail}</td>
                <td className="p-3">{reg.phone}</td>
                <td className="p-3 text-center capitalize">
                  {reg.status || "pending"}
                </td>
                <td className="p-3 text-center space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm"
                    onClick={() => handleStatusUpdate(reg._id, "confirmed")}
                    disabled={reg.status === "confirmed"}
                  >
                    Confirm
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
                    onClick={() => handleStatusUpdate(reg._id, "cancelled")}
                    disabled={reg.status === "cancelled"}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRegistered;
