import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const { getUser } = useContext(UserContext);
  console.log(params.id);

  useEffect(() => {
    async function getUserById() {
      await getUser(params.id).then((response) => {
        console.log(response);
      });
    }

    getUserById();
  }, [getUser, params]);

  return (
    <div>
      <h1> {getUser} </h1>
    </div>
  );
};

export default UserProfile;
