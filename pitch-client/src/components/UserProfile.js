import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap"
import { UserContext } from "../contexts/UserProvider";
import moment, { momement } from "moment";



const UserProfile = () => {
  const { currentUser } = useContext(UserContext);
  const yourDate = new Date(currentUser.createdAt)
  const NewDate = moment(yourDate, 'DD-MM-YYYY')
  

  return (
    <div>
                    <Card className="IDcard">
                        <Card.Body>
                            <Card.Title>{currentUser.firstName}</Card.Title>
                            <Card.Text>
                                User ID: {currentUser.userId}
                                <br />
                                Email: {currentUser.email}
                                <br />
                                Gender: {currentUser.gender}
                                <br />
                                Joined on: {NewDate}
                                <br />
                                <br />
                                <Link to={``}>Edit</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    {/* {userPosts()} */}
                </div>
  );
};

export default UserProfile;
