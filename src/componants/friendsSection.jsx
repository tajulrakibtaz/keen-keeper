import React from 'react';
import FriendCard from './FriendCard';

const FriendsSection = ({friends}) => {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-[#1f2937]">
          Your Friends
        </h2>

        <p className="text-gray-500">
          {friends.length} Friends
        </p>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>



        </div>
    );
};

export default FriendsSection;