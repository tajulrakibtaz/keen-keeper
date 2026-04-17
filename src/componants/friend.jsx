import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

const Friend = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/data/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => String(f.id) === String(id));
        setFriend(found);
      });
  }, [id]);

  const handleCheckin = (type) => {
    const existing = JSON.parse(localStorage.getItem("timeline") || "[]");
    const newEvent = {
      id: Date.now(),
      type,
      friendName: friend.name,
      date: new Date().toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric"
      }),
    };
    localStorage.setItem("timeline", JSON.stringify([newEvent, ...existing]));
    
  };

  if (!friend) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button onClick={() => navigate(-1)} className="text-gray-400 text-sm mb-4 hover:text-gray-600">← Back</button>

      <div className="border-2 border-amber-300 rounded-2xl p-6 grid grid-cols-3 gap-4">

   
        <div className="col-span-1 flex flex-col gap-3">

       
          <div className="border border-gray-200 rounded-xl p-4 text-center">
            <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto mb-3" />
            <h2 className="font-bold text-lg">{friend.name}</h2>

            <div className="flex flex-wrap justify-center gap-1 mt-2">
              <span className={`text-xs text-white px-3 py-1 rounded-full ${
                friend.status === "overdue" ? "bg-red-500"
                : friend.status === "on-track" ? "bg-green-500"
                : "bg-yellow-400 text-black"
              }`}>
                {friend.status}
              </span>
              {friend.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {friend.bio && (
              <p className="text-sm text-gray-500 italic mt-3">"{friend.bio}"</p>
            )}
            <p className="text-xs text-gray-400 mt-1">Preferred: {friend.email}</p>
          </div>

         
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 border-b border-gray-100">
              🔔 Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 border-b border-gray-100">
              🗄 Archive
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50">
              🗑 Delete
            </button>
          </div>
        </div>

      
        <div className="col-span-2 flex flex-col gap-4">

         
          <div className="grid grid-cols-3 gap-3">
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold">{friend.days_since_contact}</p>
              <p className="text-xs text-gray-400 mt-1">Days Since Contact</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold">{friend.goal}</p>
              <p className="text-xs text-gray-400 mt-1">Goal (Days)</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-green-700">{friend.next_due_date}</p>
              <p className="text-xs text-gray-400 mt-1">Next Due</p>
            </div>
          </div>

         
          <div className="border border-gray-200 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-700">Relationship Goal</p>
              <p className="text-sm text-gray-500 mt-1">
                Connect every <strong>{friend.goal} days</strong>
              </p>
            </div>
            <button className="border border-gray-300 text-sm px-4 py-1 rounded-lg hover:bg-gray-50">
              Edit
            </button>
          </div>

       
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="font-semibold text-gray-700 mb-3">Quick Check-In</p>
            <div className="grid grid-cols-3 gap-3">
              <button onClick={() => handleCheckin("Call")} className="border border-gray-200 rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50">
                <span className="text-xl">📞</span>
                <span className="text-sm text-gray-600">Call</span>
              </button>
              <button onClick={() => handleCheckin("Text")} className="border border-gray-200 rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50">
                <span className="text-xl">💬</span>
                <span className="text-sm text-gray-600">Text</span>
              </button>
              <button onClick={() => handleCheckin("Video")} className="border border-gray-200 rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50">
                <span className="text-xl">🎥</span>
                <span  className="text-sm text-gray-600">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Friend;