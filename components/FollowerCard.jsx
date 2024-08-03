import React from "react";
import { format } from "date-fns";

function FollowerCard({ follower, onRemove }) {
  const joinDate = new Date(follower.join_date * 1000);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="flex items-center w-full sm:w-auto">
            <img
              src={follower.image}
              alt={follower.fullname}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {follower.fullname}
              </h2>
              <p className="text-sm text-gray-600">@{follower.username}</p>
              <p className="text-xs text-gray-500">
                Joined: {format(joinDate, "PPP")}
              </p>
            </div>
          </div>
          <button
            onClick={() => onRemove(follower.uid)}
            className="hidden sm:block px-3 py-1 bg-red-500 text-white text-sm rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Remove
          </button>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2 text-gray-700">
            Twubric Score: {follower.twubric.total}
          </h3>
          <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
            <div className="bg-blue-100 p-2 rounded">
              <span className="font-semibold">Friends:</span>{" "}
              {follower.twubric.friends}
            </div>
            <div className="bg-green-100 p-2 rounded">
              <span className="font-semibold">Influence:</span>{" "}
              {follower.twubric.influence}
            </div>
            <div className="bg-yellow-100 p-2 rounded">
              <span className="font-semibold">Chirpiness:</span>{" "}
              {follower.twubric.chirpiness}
            </div>
          </div>
        </div>
        <div className="sm:hidden mt-4">
          <button
            onClick={() => onRemove(follower.uid)}
            className="w-full px-3 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Remove Follower
          </button>
        </div>
      </div>
    </div>
  );
}

export default FollowerCard;
