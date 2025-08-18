import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice Rahman",
    role: "Participant",
    quote:
      "CampWell helped me get a free heart checkup. The process was so smooth!",
  },
  {
    id: 2,
    name: "Sabbir Hossain",
    role: "Participant",
    quote:
      "I love how easy it is to find camps and register. Truly reliable and caring.",
  },
  {
    id: 3,
    name: "Nabila Akter",
    role: "Participant",
    quote:
      "The staff and doctors were amazing. I felt very comfortable attending the camp.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
        What Participants Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testi) => (
          <motion.div
            key={testi.id}
            className="rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #fdccd2 0%, #fde4e6 100%)",
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: testi.id * 0.2 }}
          >
            <p className="text-[var(--color-neutral)] mb-4">"{testi.quote}"</p>
            <h3 className="text-lg font-semibold text-[var(--color-secondary)]">
              {testi.name}
            </h3>
            <p className="text-sm text-[var(--color-neutral)]">{testi.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
