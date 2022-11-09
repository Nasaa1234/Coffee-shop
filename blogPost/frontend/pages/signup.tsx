import React, { useState } from "react";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { useData } from "../providers";

const Signup = () => {
  const { AddUser } = useData();
  const [value, setValue] = useState<any>({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (prop: string) => (event: any) => {
    setValue({ ...value, [prop]: event.target.value });
  };
  return (
    <div className="">
      <div className="fs-1">Login</div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Enter username"
            className="w-50"
            value={value.username}
            onChange={handleChange("username")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="w-50"
            value={value.email}
            onChange={handleChange("email")}
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="w-50"
            value={value.password}
            onChange={handleChange("password")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repeat Password"
            className="w-50"
            value={value.rePassword}
            onChange={handleChange("rePassword")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-flex justify-content-between w-50">
          <Button
            variant="primary"
            onClick={() => {
              if (value.rePassword == value.password) {
                AddUser(value.username, value.email, value.password, "");
              }
            }}
          >
            Sign Up
          </Button>
          <Link href="/login">I already have a account</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
