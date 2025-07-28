import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const OrganizerProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Local state to hold profile info and form state
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    image: "",
    contact: "",
  });
  const [editing, setEditing] = useState(false);

  // Load profile data on mount (fetch from backend)
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/organizer/profile?email=${user.email}`)
        .then((res) => {
          setProfile(res.data);
        })
        .catch(() => {
          toast.error("Failed to load profile data");
        });
    }
  }, [user, axiosSecure]);

  // Handle form input change
  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit updated profile to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSecure
      .put(`/organizer/profile/${user.email}`, profile)
      .then(() => {
        toast.success("Profile updated successfully");
        setEditing(false);
      })
      .catch(() => {
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Organizer </h2>

      {!editing ? (
        <>
          <div className="mb-4">
            <img
              src={user.photoURL || "/default-profile.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-2"
            />
            <p>
              <strong>Name:</strong> {user.displayName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
          <button
            className="btn btn-secondary text-white"
            onClick={() => setEditing(true)}
          >
            Update Profile
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={profile.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Profile Image URL
            </label>
            <input
              name="image"
              type="text"
              value={profile.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Contact</label>
            <input
              name="contact"
              type="text"
              value={profile.contact}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Phone or email"
            />
          </div>

          <div className="flex space-x-4">
            <button type="submit" className="btn btn-success text-white">
              Save
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default OrganizerProfile;
