import React from "react";
import { useParams, Link } from "react-router";
import camps from "../../../../public/camps.json";

const CampDetails = () => {
  const { campId } = useParams();

  const camp = camps.find((c) => c.id === campId);

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

  return (
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
      <button className="btn btn-secondary text-white">Join Camp</button>
    </section>
  );
};

export default CampDetails;
