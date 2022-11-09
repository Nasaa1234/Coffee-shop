import React, { useState } from "react";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { instance } from "../utils/axios";
import router from "next/router";

const Login = () => {
  const [res, setRes] = useState("");
  const [value, setValue] = useState<any>({
    password: "",
    email: "",
  });

  const login = async () => {
    await instance.post("/login", value as any).then((el: any) => {
      console.log(el);
      if (typeof window !== "undefined") {
        router.push("/");
        localStorage.setItem("token", el?.data.token);
        localStorage.setItem("name", el?.data.username);
      } else setRes(el.data.message);
    });
  };
  const handleChange = (prop: string) => (event: any) => {
    setValue({ ...value, [prop]: event.target.value });
  };
  return (
    <div>
      <div className="fs-1">Login</div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="w-50"
            onChange={handleChange("email")}
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="w-50"
            onChange={handleChange("password")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-flex justify-content-between w-50">
          <Button variant="primary" onClick={() => login()}>
            Login
          </Button>
          <Link href="/signup">Dont have a account</Link>
        </div>
      </Form>
      <div>{res}</div>
    </div>
  );
};

export default Login;
