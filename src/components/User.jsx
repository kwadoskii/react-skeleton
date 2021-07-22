import { useState, useEffect } from "react";

import SkeletonProfile from "../skeletons/SkeletonProfile";

export default function User() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonProfile />}
    </div>
  );
}
