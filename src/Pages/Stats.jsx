import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#6D28D9", "#14532D", "#16A34A"];

const Stats = () => {
  const { timeline } = useContext(AppContext);

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  return (
    <div className="w-full bg-white py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Friendship Analytics
      </h1>

      {/* Card */}
      <div className="bg-white p-4 sm:p-6 rounded shadow">
        <p className="mb-4 text-sm sm:text-base text-gray-600">
          By Interaction Type
        </p>

        {/* Empty state */}
        {timeline.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No interactions yet</p>
        ) : (
          <div className="flex justify-center items-center">
            <PieChart
              width={window.innerWidth < 640 ? 250 : 320}
              height={window.innerWidth < 640 ? 250 : 320}
            >
              <Pie
                data={data}
                innerRadius={window.innerWidth < 640 ? 50 : 70}
                outerRadius={window.innerWidth < 640 ? 80 : 110}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
