import React from "react";
import {
  FaHeart,
  FaTooth,
  FaLungs,
  FaChild,
  FaSpa,
  FaStethoscope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Heart",
    icon: <FaHeart size={40} className="text-[var(--color-primary)]" />,
  },
  {
    id: 2,
    name: "Teeth",
    icon: <FaTooth size={40} className="text-[var(--color-primary)]" />,
  },
  {
    id: 3,
    name: "Lungs",
    icon: <FaLungs size={40} className="text-[var(--color-primary)]" />,
  },
  {
    id: 4,
    name: "Children",
    icon: <FaChild size={40} className="text-[var(--color-primary)]" />,
  },
  {
    id: 5,
    name: "Wellbeing",
    icon: <FaSpa size={40} className="text-[var(--color-primary)]" />,
  },
  {
    id: 6,
    name: "General",
    icon: <FaStethoscope size={40} className="text-[var(--color-primary)]" />,
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
        Checkup Categories
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            className="bg-gradient-to-br from-[#e0f7f9] to-[#f0fbfc] rounded-2xl p-6 text-center shadow-md hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: cat.id * 0.1 }}
          >
            <div className="mb-4 flex justify-center">{cat.icon}</div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral)]">
              {cat.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
