import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[var(--color-secondary)] mb-12">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 bg-[var(--color-accent)] rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">
              Our Email
            </h3>
            <p className="text-[var(--color-neutral)]">support@campwell.com</p>
          </div>

          <div className="p-6 bg-[var(--color-accent)] rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">
              Phone
            </h3>
            <p className="text-[var(--color-neutral)]">+880 1521 759 634</p>
          </div>

          <div className="p-6 bg-[var(--color-accent)] rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">
              Address
            </h3>
            <p className="text-[var(--color-neutral)]">
              City Hospital, Chittagong, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[var(--color-accent)] p-8 rounded-2xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-[var(--color-secondary)] font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full rounded-lg"
              />
            </div>

            <div>
              <label className="block text-[var(--color-secondary)] font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full rounded-lg"
              />
            </div>

            <div>
              <label className="block text-[var(--color-secondary)] font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered w-full rounded-lg"
              />
            </div>

            <div>
              <label className="block text-[var(--color-secondary)] font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="textarea textarea-bordered w-full rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-[var(--color-primary)] border-none text-white w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
