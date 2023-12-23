import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext.jsx";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = useUserAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (user && user.access) navigate("/home");
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let res = await signUp(userName, email, firstName, lastName, password);
      navigate('/signin');
    } catch (err) {
      setError(err.response.data["username"][0]);
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Signup</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Control
                value={userName}
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
