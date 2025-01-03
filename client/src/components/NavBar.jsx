import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Navbar className="nb-4 .bg-dark.bg-gradient" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            JaMoveo
          </Link>
        </h2>
        {user && <span className="text-warning">Hello {user?.name}!</span>}
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user && (
              <>
                <Link
                  onClick={() => logoutUser()}
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  Logout
                </Link>
              </>
            )}

            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                Register:
                <Link
                  to="/admin-register"
                  className="link-light text-decoration-none"
                >
                  admin
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  not admin
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
