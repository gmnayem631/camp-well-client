import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAxios from "../../../hooks/useAxios";

const PopularCamps = () => {
  const axios = useAxios();
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    axios
      .get("/camps")
      .then((res) => setCamps(res.data))
      .catch((err) => {
        console.error("Failed to fetch camps", err);
      });
  }, [axios]);

  const sortedCamps = camps
    .sort((a, b) => b.participantCount - a.participantCount)
    .slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold mb-8 text-primary">
        Popular Medical Camps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedCamps.map((camp) => (
          <div
            key={camp._id}
            className="card bg-[#f2f3f4] shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={camp.image}
              alt={camp.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {camp.name}
              </h3>
              <p className="text-sm text-neutral mb-1">
                <span className="font-semibold">Fees:</span> ${camp.fees}
              </p>
              <p className="text-sm text-neutral mb-1">
                <span className="font-semibold">Date & Time:</span>{" "}
                {camp.dateTime}
              </p>
              <p className="text-sm text-neutral mb-1">
                <span className="font-semibold">Location:</span> {camp.location}
              </p>
              <p className="text-sm text-neutral mb-1">
                <span className="font-semibold">Healthcare Professional:</span>{" "}
                {camp.healthcareProfessional}
              </p>
              <p className="mt-auto text-sm font-semibold text-primary mb-4">
                Participants: {camp.participantCount}
              </p>
              <Link
                to={`/camp-details/${camp._id}`}
                className="btn btn-outline btn-secondary mt-auto hover:text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/available-camps"
          className="btn btn-secondary px-8 py-3 text-lg font-semibold text-white"
        >
          See All Camps
        </Link>
      </div>
    </section>
  );
};

export default PopularCamps;
