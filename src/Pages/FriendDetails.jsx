import { useParams } from "react-router-dom";
import friends from "../data/friend.json";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const FriendDetails = () => {
  const { id } = useParams();

  const { addEvent } = useContext(AppContext);

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Friend not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* LEFT CARD */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3"
          />

          <h2 className="font-semibold text-base sm:text-lg text-gray-800">
            {friend.name}
          </h2>

          <span
            className={`text-xs px-2 py-1 rounded ${
              friend.status === "on-track"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {friend.status === "on-track" ? "On-Track" : "Overdue"}
          </span>

          <div className="mt-2 flex justify-center gap-2 flex-wrap">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-gray-600 mt-3 italic">
            "{friend.bio}"
          </p>

          <p className="text-xs text-gray-500 mt-1">Preferred: email</p>

          {/* Buttons */}
          <div className="mt-4 space-y-2 text-sm">
            <button className="w-full bg-gray-100 text-gray-700 font-medium py-2 rounded hover:bg-gray-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
              <FaRegClock className="text-gray-600" />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-gray-100 text-gray-700 font-medium py-2 rounded hover:bg-gray-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
              <FaArchive className="text-gray-600" />
              Archive
            </button>

            <button className="w-full bg-red-100 text-red-600 font-medium py-2 rounded hover:bg-red-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
              <FaTrash className="text-red-600" />
              Delete
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4 sm:space-y-6">
          {/* TOP STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                {friend.days_since_contact}
              </h2>
              <p className="text-xs text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                {friend.goal}
              </h2>
              <p className="text-xs text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow text-center">
              <h2 className="text-xs sm:text-sm font-bold text-gray-800">
                {friend.next_due_date}
              </h2>
              <p className="text-xs text-gray-500">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                Relationship Goal
              </h3>
              <button className="text-xs bg-gray-500 px-2 py-1 rounded hover:bg-gray-300">
                Edit
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              Connect every {friend.goal} days
            </p>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 text-gray-800 text-sm sm:text-base">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
              <div
                onClick={() => addEvent("Call", friend.name)}
                className="bg-gray-100 p-3 sm:p-4 rounded hover:bg-gray-200 cursor-pointer flex flex-col items-center gap-2"
              >
                <FaPhoneAlt className="text-green-700 text-base sm:text-lg" />
                <p className="text-xs sm:text-sm text-gray-700">Call</p>
              </div>

              <div
                onClick={() => addEvent("Text", friend.name)}
                className="bg-gray-100 p-3 sm:p-4 rounded hover:bg-gray-200 cursor-pointer flex flex-col items-center gap-2"
              >
                <FaCommentDots className="text-blue-600 text-base sm:text-lg" />
                <p className="text-xs sm:text-sm text-gray-700">Text</p>
              </div>

              <div
                onClick={() => addEvent("Video", friend.name)}
                className="bg-gray-100 p-3 sm:p-4 rounded hover:bg-gray-200 cursor-pointer flex flex-col items-center gap-2"
              >
                <FaVideo className="text-purple-600 text-base sm:text-lg" />
                <p className="text-xs sm:text-sm text-gray-700">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
