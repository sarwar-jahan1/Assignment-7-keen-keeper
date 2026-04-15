import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";

const Timeline = () => {
  const { timeline } = useContext(AppContext);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10 bg-white">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Timeline
      </h1>

      <div className="space-y-4">
        {timeline.length === 0 ? (
          <p className="text-center text-gray-500 text-sm sm:text-base">
            No interactions yet
          </p>
        ) : (
          timeline.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 sm:p-4 rounded shadow flex items-center gap-3"
            >
              <span className="text-base sm:text-lg">
                {item.type === "Call" && (
                  <FaPhoneAlt className="text-green-600" />
                )}
                {item.type === "Text" && (
                  <FaCommentDots className="text-blue-600" />
                )}
                {item.type === "Video" && (
                  <FaVideo className="text-purple-600" />
                )}
              </span>

              <div className="text-left">
                <p className="font-medium text-gray-800 text-sm sm:text-base">
                  {item.type} with {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
