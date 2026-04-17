import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-8xl font-bold text-emerald-800">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</p>
      <p className="text-gray-400 mt-2">Looks like this page doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-emerald-800 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;