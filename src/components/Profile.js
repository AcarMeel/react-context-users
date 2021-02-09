import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <div>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.id}
            className="card-img-top m-auto img-fluid rounded-circle"
            width="70"
          />
          <div>{`${selectedUser?.first_name} ${selectedUser?.last_name}`}</div>
        </div>
      ) : (
        <h1>No User selected</h1>
      )}
    </div>
  );
};

export default Profile;
