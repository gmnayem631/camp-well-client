import React from "react";
import Marquee from "react-fast-marquee";

const tips = [
  "5 Tips for a Healthy Heart: Simple daily habits to improve heart health.",
  "Dental Care at Home: Top 3 practices to keep your teeth healthy.",
  "Lung Health & Exercise: Easy breathing exercises for healthy lungs.",
  "Children’s Immunity Tips: Nutrition and activities to boost immunity.",
  "Mental Wellbeing: Quick mindfulness exercises for busy people.",
];

const CommunityMarquee = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl text-[var(--color-secondary)] font-extrabold text-center mb-8">
        Health Tips & Community Insights
      </h2>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="overflow-hidden hover:cursor-pointer"
      >
        {tips.map((tip, index) => (
          <div
            key={index}
            className="mx-10 flex items-center justify-center px-6 py-4 bg-gradient-to-br from-[#fde4e6] to-[#fdccd2] rounded-2xl shadow-md"
          >
            <p className="text-[var(--color-neutral)] font-medium">{tip}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default CommunityMarquee;
