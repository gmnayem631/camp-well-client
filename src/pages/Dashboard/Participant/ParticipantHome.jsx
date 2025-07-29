import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ParticipantHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    image: "",
    contact: "",
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/participants/profile?email=${user.email}`)
        .then((res) => {
          setProfile(res.data);
        })
        .catch(() => {
          toast.error("Failed to load profile data");
        });
    }
  }, [user, axiosSecure]);

  const handleChange = (e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSecure
      .put(`/participants/profile/${user.email}`, profile)
      .then(() => {
        toast.success("Profile updated successfully");
        setEditing(false);
      })
      .catch(() => {
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-base-100 shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Participant Profile
      </h2>

      {!editing ? (
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.photoURL || profile.image || "/default-profile.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
          />
          <div className="text-center">
            <p className="text-lg font-semibold">
              <strong>Name:</strong> {user.displayName || profile.name}
            </p>
            <p className="text-md text-gray-600">
              <strong>Email:</strong> {user.email}
            </p>
            {profile.contact && (
              <p className="text-md text-gray-600">
                <strong>Contact:</strong> {profile.contact}
              </p>
            )}
          </div>
          <button
            className="btn btn-secondary text-white"
            onClick={() => setEditing(true)}
          >
            Update Profile
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-lg shadow-md"
        >
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

          <div className="flex justify-between">
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

export default ParticipantHome;
