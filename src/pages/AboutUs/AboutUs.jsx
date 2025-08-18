import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUsers, FaHistory } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router";

const statsData = [
  { year: "2021", camps: 20, participants: 500 },
  { year: "2022", camps: 35, participants: 1200 },
  { year: "2023", camps: 50, participants: 2500 },
  { year: "2024", camps: 65, participants: 4000 },
];

const AboutUs = () => {
  return (
    <div className=" text-[var(--color-neutral)]">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-4xl font-bold mb-4 text-[var(--color-primary)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About CampWell
        </motion.h1>
        <motion.p
          className="text-lg text-[var(--color-secondary)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Reliable. Accessible. Compassionate.
          <br /> Your Trusted Partner in Community Healthcare.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto py-12 px-6">
        <motion.div
          className="bg-[var(--color-accent)] p-6 rounded-2xl shadow-md flex items-start gap-4"
          whileHover={{ scale: 1.03 }}
        >
          <FaHeartbeat className="text-4xl text-[var(--color-primary)]" />
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-neutral)]">
              Our Mission
            </h2>
            <p>
              To make essential healthcare services accessible to every
              community through well-organized medical camps that provide free
              and affordable checkups.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-[var(--color-accent)] p-6 rounded-2xl shadow-md flex items-start gap-4"
          whileHover={{ scale: 1.03 }}
        >
          <MdHealthAndSafety className="text-4xl text-[var(--color-secondary)]" />
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-neutral)]">
              Our Vision
            </h2>
            <p>
              Building a healthier tomorrow where every individual has the
              opportunity to receive preventive healthcare with dignity and
              compassion.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline / History */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-primary)]">
          Our Journey
        </h2>
        <div className="relative border-l-4 border-[var(--color-secondary)] ml-4">
          {[
            {
              year: "2021",
              text: "CampWell was founded with a mission to bridge healthcare gaps.",
            },
            {
              year: "2022",
              text: "Expanded to multiple districts, reaching 1,200+ participants.",
            },
            {
              year: "2023",
              text: "Introduced specialized checkups for children, heart, and lungs.",
            },
            {
              year: "2024",
              text: "Partnered with hospitals and NGOs to scale nationwide.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-8 ml-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white">
                <FaHistory />
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-secondary)]">
                {item.year}
              </h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-[var(--color-primary)]">
          Our Impact in Numbers
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={statsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="camps"
              stroke="#fd8087"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="participants"
              stroke="#007d8a"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-center mt-4 text-[var(--color-neutral)]">
          Growing stronger every year with more camps and more lives touched.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="text-center py-12 px-6 bg-gradient-to-r from-[#007d8a]/90 via-[#00a0aa]/80 to-[#38bdf8]/70 text-white">
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join Our Mission
        </motion.h2>
        <p className="mb-6">
          Be part of our journey to create healthier, happier communities.
          Explore upcoming camps and take your step towards better health.
        </p>
        <Link
          to={"/available-camps"}
          className="btn bg-[var(--color-primary)] border-none text-white hover:bg-[var(--color-neutral)]"
        >
          Explore Camps
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
