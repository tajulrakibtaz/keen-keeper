import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = {
  Text:   "#a855f7",
  Call:   "#1d4131",
  Video:  "#22c55e",
  Meetup: "#f59e0b",
};

const StatPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline") || "[]");
    setEvents(stored);
  }, []);

  const counts = events.reduce((acc, e) => {
    acc[e.type] = (acc[e.type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Friendship Analytics</h1>

      <div className="border border-dashed border-gray-300 rounded-xl p-6">
        <p className="text-sm text-gray-500 mb-4">By Interaction Type</p>

        {data.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-10">
            No data yet. Log some check-ins first!
          </p>
        ) : (
          <div className="flex justify-center">
            <PieChart width={300} height={280}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={COLORS[entry.name] || "#94a3b8"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontSize: '14px', color: '#4b5563' }}>{value}</span>
                )}
              />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatPage;