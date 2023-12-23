import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext.jsx";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, logIn } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.access) navigate("/home");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let res = await logIn(userName, password);
      window.location.reload();
    } catch (err) {
      setError(err.response.data.detail);
    }
  };


  return (
    <div className={"max-w-min"}>
      <div className="p-4 box">
        <h2 className="mb-3">Login</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Control
              placeholder="username"
              autoComplete={"username"}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete={"current-password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
