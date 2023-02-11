import React from 'react';

const UserProfile = () => {
    const { getUser } = useContext(UserContext);

    return (
        <div>
            <h1> {getUser} </h1>
        </div>

    )
};

export default UserProfile;