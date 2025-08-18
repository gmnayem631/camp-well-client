import React from "react";

const faqs = [
  {
    id: 1,
    question: "How do I register for a camp?",
    answer:
      "Simply go to the Available Camps page, select your preferred camp, and click 'Register'. Fill in your details and confirm your spot.",
  },
  {
    id: 2,
    question: "Are the medical checkups free?",
    answer:
      "Yes! All camps listed on CampWell provide free checkups to participants.",
  },
  {
    id: 3,
    question: "Can I attend multiple camps?",
    answer:
      "Absolutely! You can register for as many camps as you want, based on availability.",
  },
  {
    id: 4,
    question: "Do I need to create an account?",
    answer:
      "Yes, you need to sign up to register for camps. This helps us keep track of your checkups and reports.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            tabIndex={0}
            className="collapse collapse-arrow border border-[var(--color-primary)] rounded-box"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-[var(--color-secondary)] text-lg font-medium peer-checked:text-[var(--color-primary)]">
              {faq.question}
            </div>
            <div className="collapse-content text-[var(--color-neutral)]">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
