import React from "react";
import friends from "../data/friend.json";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-center py-5">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-3">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 text-sm mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br />
        relationships that matter most.
      </p>

      {/* Button */}
      <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded text-sm mb-10">
        + Add a Friend
      </button>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded shadow-md text-center transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">{friends.length}</h2>
          <p className="text-gray-600 text-sm mt-1">Total Friends</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md text-center transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {friends.filter((f) => f.status === "on-track").length}
          </h2>
          <p className="text-gray-600 text-sm mt-1">On Track</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md text-center transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {friends.filter((f) => f.status === "overdue").length}
          </h2>
          <p className="text-gray-600 text-sm mt-1">Need Attention</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md text-center transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {friends.reduce((acc, f) => acc + f.days_since_contact, 0)}
          </h2>
          <p className="text-gray-600 text-sm mt-1">Interactions This Month</p>
        </div>
      </div>

      {/* Friend List */}
      <div className="max-w-5xl mx-auto mt-12 text-left">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link to={`/friend/${friend.id}`} key={friend.id}>
              <div className="bg-gray-100 p-5 rounded shadow-md text-center transition duration-300 hover:shadow-lg cursor-pointer">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3"
                />

                <h3 className="font-bold text-gray-800">{friend.name}</h3>

                <p className="text-xs text-gray-500 mb-2">
                  {friend.days_since_contact}d ago
                </p>

                <div className="flex justify-center gap-2 mb-2 flex-wrap">
                  {friend.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded ${
                    friend.status === "on-track"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {friend.status === "on-track" ? "On-Track" : "Overdue"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
