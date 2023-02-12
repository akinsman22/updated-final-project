import { Container, Nav, Navbar, NavDropdown, Stack } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import React, { useContext } from "react";


function NavBar() {
  // const { loginedUser, /* signOutUser */ } = useContext(UserContext);

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <h1>Pitch Me An Idea</h1>
          </Navbar.Brand>


          <Navbar.Collapse id="basic-navbar-nav ">

            <Nav className='justify-content-end'>
              {/* {!loginedUser ? (

                <div>
                  <Link className="nav-link" to="/signin">Login</Link>
                  <Link className="nav-link" to="/register">Create an Account</Link>
                  <Link className="nav-link" to="/pitches">All Pitches</Link>
                  <Link className="nav-link" to="route">Search User</Link>
                </div>

              ) :
                <div className="ml-4 dropdown d-inline">
                  <Link className="nav-link" to="/users/:id">Profile</Link>
                  <Link className="nav-link" to="/signout">Logout</Link>
                  <button onClick={signOutUser.bind(this, userId)}>Logout</button>

                  <span> {loginedUser && loginedUser.name}</span>
                  <NavDropdown title="Pitch Posts" id='basic-nav-dropdown'>
                    <NavDropdown.Item href="http://localhost:3000/users/pitches/new">Create Post</NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3000/users/pitches/edit/:id">Edit Post</NavDropdown.Item>
                    <NavDropdown.Item href="#"></NavDropdown.Item>
                  </NavDropdown>

                </div>

              } */}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>

      <footer style={{ marginTop: "1rem", padding: "1rem", bottom: "0", left: "0", width: "100%" }}>
        <center className="footer">
          <div>
            <a href='https://github.com/akinsman22' target="blank">
              <img alt="github" style={{ width: "50px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6H3k5o1hr4luxqjzGWsJEKODInCZKG2Q_Fg&usqp=CAU' />
            </a>
          </div>
        </center>
      </footer>
    </>
  );
}

export default NavBar;