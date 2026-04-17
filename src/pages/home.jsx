import React, { useEffect, useState } from 'react';
import FriendsSection from '../componants/friendsSection';
import { ClimbingBoxLoader } from 'react-spinners';


const Home = () => {
     const [friends, setFriends] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/data/friends.json") 
    .then((res) => res.json())
    .then((data) => {
      setFriends(data);
      setLoading(false); 
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);
 const totalFriends = friends.length;
 const onTrack = friends.filter(
    (friend) => friend.status === "on-track"
  ).length;
  const needAttention = friends.filter(
    (friend) =>
      friend.status === "overdue" || friend.status === "almost due"
  ).length;

  const stats = [
    {
      number: totalFriends,
      label: "Total Friends",
    },
    {
      number: onTrack,
      label: "On Track",
    },
    {
      number: needAttention,
      label: "Need Attention",
    },
    {
      number: 12,
      label: "Interactions This Month",
    },
  ];

    return (
        <div>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1f2937] leading-tight">
          Friends to keep close in your life
        </h1>

        <p className="text-[#6b7280] text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="mt-8 bg-[#295b4a] hover:bg-[#214b3d] text-white font-medium px-8 py-3 rounded-md transition duration-300">
          + Add a Friend
        </button>
        </div>

     

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 py-10 shadow-sm"
            >
              <h2 className="text-4xl font-bold text-[#295b4a]">
                {item.number}
              </h2>
              <p className="text-[#64748b] text-lg mt-4">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-10 mb-10"></div>
     

{loading?
<div>
    
<ClimbingBoxLoader></ClimbingBoxLoader>

</div>
:
    
    <FriendsSection friends={friends}></FriendsSection>}

        </div>

    );
};

export default Home;


