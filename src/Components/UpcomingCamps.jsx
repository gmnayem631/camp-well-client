import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const camps = [
  {
    id: 1,
    name: "Heart Health Camp",
    date: "2025-09-05",
    location: "Dhaka Central Park",
    description:
      "Free heart checkup for adults with professional cardiologists.",
  },
  {
    id: 2,
    name: "Children’s Wellness Camp",
    date: "2025-09-12",
    location: "Gulshan Community Center",
    description: "Vaccinations, checkups, and fun activities for children.",
  },
  {
    id: 3,
    name: "Dental Care Camp",
    date: "2025-09-18",
    location: "Mirpur Health Hub",
    description: "Free dental checkup and advice from certified dentists.",
  },
];

const UpcomingCamps = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto bg-[#FFFAF0]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
        Upcoming Camps
      </h2>

      <div className="flex flex-col gap-8 border-l-4 border-[var(--color-primary)] pl-6">
        {camps.map((camp, idx) => (
          <motion.div
            key={camp.id}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="absolute -left-5 top-0 w-4 h-4 bg-[var(--color-primary)] rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
              {camp.name}
            </h3>
            <p className="text-[var(--color-neutral)] mb-1">
              {camp.description}
            </p>
            <div className="flex items-center gap-4 text-[var(--color-neutral)] text-sm">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {camp.date}
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {camp.location}
              </span>
            </div>
            <Link
              to="/available-camps"
              className="inline-block mt-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Register Now
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingCamps;
