import React from 'react';

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";

const Timeline = () => {
  const { timeline } = useContext(AppContext);

  return (
    <div className="w-full  px-10 py-10 bg-white">

      <h1 className="text-2xl font-bold mb-6 text-gray-800 py-5">
        Timeline
      </h1>

      <div className="space-y-4">

        {timeline.length === 0 ? (
          <p className="text-center text-gray-500">
            No interactions yet
          </p>
        ) : (
          timeline.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded shadow flex items-center gap-3"
            >
              
              {/* ICON */}
              <span className="text-lg">
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

              {/* TEXT */}
              <div>
                <p className="font-medium text-gray-800">
                  {item.type} with {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.date}
                </p>
              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Timeline;