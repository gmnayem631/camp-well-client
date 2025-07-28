import React from "react";
import { Link } from "react-router";

const CampCard = ({ camp }) => {
  return (
    <div className="card bg-[#f2f3f4] shadow-md border border-base-200 rounded-2xl">
      <figure>
        <img
          src={camp.image}
          alt={camp.name}
          className="h-48 w-full object-cover rounded-t-2xl"
        />
      </figure>

      <div className="card-body text-neutral">
        <h3 className="text-xl font-semibold">{camp.name}</h3>
        <p className="text-sm">{camp.description}</p>

        <p>
          <span className="font-medium">📍 Location:</span> {camp.location}
        </p>
        <p>
          <span className="font-medium">📅 Date:</span>{" "}
          {new Date(camp.dateTime).toLocaleString("en-BD", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
        <p>
          <span className="font-medium">👩‍⚕️ Doctor:</span>{" "}
          {camp.healthcareProfessional}
        </p>
        <p>
          <span className="font-medium">🧍 Participants:</span>{" "}
          {camp.participantCount}
        </p>

        <Link
          to={`/camp-details/${camp._id}`}
          className={"btn btn-secondary btn-outline hover:text-white mt-4"}
        >
          {camp.fees > 0
            ? `View Details - $${camp.fees}`
            : "View Details (Free)"}
        </Link>
      </div>
    </div>
  );
};

export default CampCard;
