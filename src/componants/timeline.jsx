import React, { useEffect, useState } from 'react';

const TYPE_CONFIG = {
  Call:   { icon: "📞", bg: "bg-gray-100" },
  Text:   { icon: "💬", bg: "bg-gray-100" },
  Video:  { icon: "🎥", bg: "bg-blue-100" },
  Meetup: { icon: "🤝", bg: "bg-yellow-100" },
};

const Timeline = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline") || "[]");
    setEvents(stored);
  }, []);

  const filters = ["All", "Call", "Text", "Video", "Meetup"];

  const filtered = (filter === "All" ? events : events.filter(e => e.type === filter))
    .sort((a, b) => sort === "newest" ? b.id - a.id : a.id - b.id);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"
        >
          {filters.map(f => <option key={f}>{f}</option>)}
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="flex flex-col gap-0">
        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-10">No events </p>
        )}
        {filtered.map((event) => {
          const config = TYPE_CONFIG[event.type] || { icon: "📌", bg: "bg-gray-100" };
          return (
            <div
              key={event.id}
              className="flex items-center gap-3 py-3 border-b border-dashed border-gray-200"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-base ${config.bg} shrink-0`}>
                {config.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  <span className="font-semibold">{event.type}</span>{" "}
                  <span className="text-gray-400 font-normal">with {event.friendName}</span>
                </p>
                <p className="text-xs text-gray-400">{event.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;