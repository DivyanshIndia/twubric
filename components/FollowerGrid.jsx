import React from "react";
import FollowerCard from "./FollowerCard";

function FollowerGrid({ followers, onRemoveFollower }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {followers.map((follower) => (
        <FollowerCard
          key={follower.uid}
          follower={follower}
          onRemove={onRemoveFollower}
        />
      ))}
    </div>
  );
}

export default FollowerGrid;
