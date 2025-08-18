import React from "react";
import {
  FaSearch,
  FaRegClipboard,
  FaUserCheck,
  FaFileMedical,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: <FaSearch size={40} className="text-[var(--color-primary)]" />,
    title: "Find a Camp",
    description:
      "Browse available medical camps by category, date, and location.",
  },
  {
    id: 2,
    icon: <FaRegClipboard size={40} className="text-[var(--color-primary)]" />,
    title: "Register Easily",
    description:
      "Sign up in a few clicks and reserve your spot for the checkup.",
  },
  {
    id: 3,
    icon: <FaUserCheck size={40} className="text-[var(--color-primary)]" />,
    title: "Attend Camp",
    description:
      "Visit the camp on your selected date and get health checkups.",
  },
  {
    id: 4,
    icon: <FaFileMedical size={40} className="text-[var(--color-primary)]" />,
    title: "Get Your Reports",
    description: "Receive a summary of your checkups to monitor your health.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className="rounded-2xl p-6 text-center shadow-md hover:shadow-xl cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #e0f7f9 0%, #f0fbfc 100%)",
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: step.id * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-[var(--color-neutral)]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
