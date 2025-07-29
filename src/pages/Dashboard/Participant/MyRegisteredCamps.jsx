import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaInfoCircle, FaCreditCard } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const MyRegisteredCamps = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="text-center mt-10">Loading your registered camps...</div>
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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Registered Camps</h2>
      <table className="table w-full border">
        <thead>
          <tr>
            <th>Camp Name</th>
            <th>Participant Name</th>
            <th>Participant Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg._id}>
              <td>{reg.campName}</td>
              <td>{reg.participantName}</td>
              <td>{reg.participantEmail}</td>
              <td className="flex justify-center space-x-4">
                {/* <Link
                  to={`/camp-details/${reg._id}`}
                  title="Camp Details"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaInfoCircle size={22} />
                </Link> */}
                <button
                  title="Pay"
                  className="text-green-600 hover:text-green-800"
                  onClick={() => handlePay(reg._id)}
                >
                  <FaCreditCard size={22} />
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
