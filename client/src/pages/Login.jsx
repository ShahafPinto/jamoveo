import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <Form onSubmit={loginUser}>
      <Row
        style={{
          height: "100vh",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <Col xs={6}>
          <Stack gap={3}>
            <h2>Login</h2>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, name: e.target.value })
              }
            />
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
            <Button variant="primary" type="submit">
              {isLoginLoading ? "Getting you in..." : "Login"}
            </Button>
            {loginError?.error && (
              <Alert variant="danger">
                <p>{loginError?.message}</p>
              </Alert>
            )}
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
