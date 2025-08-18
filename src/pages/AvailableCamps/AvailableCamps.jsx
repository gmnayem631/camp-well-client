import React, { useEffect, useState } from "react";
import CampCard from "./CampCard";
import useAxios from "../../hooks/useAxios";

const AvailableCamps = () => {
  const axiosSecure = useAxios();

  const [camps, setCamps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isGridTwoCol, setIsGridTwoCol] = useState(false);

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const res = await axiosSecure.get("/camps", {
          params: { search: searchTerm, sortBy },
        });
        setCamps(res.data);
      } catch (err) {
        console.error("Failed to load camps:", err);
      }
    };

    fetchCamps();
  }, [searchTerm, sortBy, axiosSecure]);

  // Filtered and Sorted Data
  const filteredCamps = camps
    .filter(
      (camp) =>
        camp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camp.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camp.healthcareProfessional
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "registered")
        return b.participantCount - a.participantCount;
      if (sortBy === "fees") return a.fees - b.fees;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-10">
        Available Medical Camps
      </h2>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by name, doctor, or location..."
          className="input input-bordered w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex items-center gap-4">
          <select
            className="select select-bordered"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="registered">Most Registered</option>
            <option value="fees">Camp Fees (Low to High)</option>
            <option value="name">Alphabetical (A–Z)</option>
          </select>

          <button
            className="btn btn-outline btn-sm"
            onClick={() => setIsGridTwoCol(!isGridTwoCol)}
          >
            {isGridTwoCol ? "3-Column Layout" : "2-Column Layout"}
          </button>
        </div>
      </div>

      {/* Camp Grid */}
      <div
        className={`grid gap-6 grid-cols-1 ${
          isGridTwoCol ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredCamps.map((camp) => (
          <CampCard key={camp._id} camp={camp} />
        ))}
      </div>
    </section>
  );
};

export default AvailableCamps;
