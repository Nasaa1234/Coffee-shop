/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import router from "next/router";
import { Dropdown } from "react-bootstrap";
export const Header = () => {
  const [user, setUser] = useState<any>("");
  useEffect(() => {
    setUser(localStorage.getItem("name"));
  }, [typeof window !== "undefined" ? localStorage.getItem("name") : null]);

  return (
    <div className="d-flex justify-content-between align-items-center pt-3 ">
      <Link href="/home">
        <img
          src={
            "https://image.shutterstock.com/image-vector/handdesigned-lettering-team-logo-vector-260nw-1619256355.jpg"
          }
          style={{
            width: 80,
          }}
          alt="Teams"
        />
      </Link>
      <div className="d-flex gap-4 align-items-center ">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        {user && <Link href="/admin">Admin</Link>}

        {!user ? (
          <div className="border border-primary rounded border-2">
            <button
              className="btn "
              style={{ background: "rgba(77, 160, 253, 0.1)" }}
            >
              <div
                className="text-primary opacity-75 "
                onClick={() => router.push("login")}
              >
                Get Acces
              </div>
            </button>
          </div>
        ) : (
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">{user}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="/login"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("name");
                  setUser("");
                }}
              >
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </div>
  );
};
