import React from 'react';


import { useNavigate } from 'react-router';

const FriendCard = ({friend}) => {
    const navigate = useNavigate();
    return (
    <div className='shadow p-4 cursor-pointer'  onClick={() => navigate(`/friend/${friend.id}`)}>
        <img src={friend.picture} className='w-40 h-40 m-auto rounded-full'/>
      <h2 className="text-center">{friend.name}</h2>
      <p className="text-center">{friend.days_since_contact}d ago</p>
      <div className="text-center">
        {friend.tags.map((tags, index) => (
          <span key={index} className="btn btn-secondary rounded-4xl m-1">{tags}</span>
        ))}
        <button className={`text-white rounded-4xl p-2 ${
          friend.status === "overdue" ? "bg-red-500"
          : friend.status === "on-track" ? "bg-green-500"
          : friend.status === "almost due" ? "bg-yellow-500 text-black"
          : ''
        }`}>{friend.status}</button>
      </div>
    </div>
  );
};

export default FriendCard;