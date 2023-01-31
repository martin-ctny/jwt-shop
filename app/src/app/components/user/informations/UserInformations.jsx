import { useContext, useState } from "react";
import { UserContext } from "../../../../src/context/UserContext";

const UserInformations = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>firstname: {user.firstName}</p>
      <p>lastname: {user.lastName}</p>
    </div>
  );
};

export default UserInformations;
