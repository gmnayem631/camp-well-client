import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const samplePosts = [
  {
    id: 1,
    title: "Heart Health Tips",
    category: "Heart",
    content:
      "Regular exercise, a balanced diet, and routine checkups help maintain a healthy heart.",
  },
  {
    id: 2,
    title: "Dental Hygiene",
    category: "Teeth",
    content:
      "Brush twice a day, floss regularly, and visit your dentist every 6 months.",
  },
  {
    id: 3,
    title: "Children’s Wellbeing",
    category: "Children",
    content:
      "Ensure vaccinations are up-to-date and encourage outdoor activities daily.",
  },
  {
    id: 4,
    title: "Lung Care",
    category: "Lungs",
    content:
      "Avoid smoking, practice deep breathing exercises, and get regular lung checkups.",
  },
];

const Community = () => {
  const [posts, setPosts] = useState(
    samplePosts.map((post) => ({ ...post, likes: 0, comments: [] }))
  );

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddComment = (id, comment) => {
    if (!comment) return;
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-[var(--color-primary)]">
        Community Health Tips
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-[var(--color-accent)] p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
              {post.title}
            </h2>
            <p className="mb-4 text-[var(--color-neutral)]">{post.content}</p>
            <div className="flex items-center gap-4 mb-2">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-1 text-[var(--color-primary)]"
              >
                <FaHeart /> {post.likes}
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--color-neutral)]">
                Add Comment
              </label>
              <input
                type="text"
                placeholder="Write something..."
                className="input input-bordered w-full mb-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              {post.comments.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-[var(--color-neutral)]">
                  {post.comments.map((comment, idx) => (
                    <li key={idx}>{comment}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Community;
