import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);


  return (
    <div>
      <div>{currentUser.email}</div>
    </div>
  );
};

export default UserProfile;
