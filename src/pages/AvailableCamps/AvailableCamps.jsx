import React from "react";
import { Link } from "react-router";
import camps from "../../../public/camps.json";
import CampCard from "./CampCard";

const AvailableCamps = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-10">
        Available Medical Camps
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {camps.map((camp) => (
          <CampCard key={camp.id} camp={camp}></CampCard>
        ))}
      </div>
    </section>
  );
};

export default AvailableCamps;
