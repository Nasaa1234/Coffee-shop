/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "react-bootstrap";
import { CarouselComponent } from "./Carousel";
import { News } from "./News";
export const Home = () => {
  const image1 = require("../assets/picture/picture1.jpg");
  const image2 = require("../assets/picture/picture2.jpg");
  const image3 = require("../assets/picture/picture3.jpg");
  const image = require("../assets/picture/bgImage.jpg");

  return (
    <div>
      <div
        style={{
          height: "95vh",
        }}
      >
        <img
          src={image.default.src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        />
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: "65vh" }}
        >
          <div className="d-flex flex-column gap-4">
            <div className="fw-bold text-white" style={{ fontSize: 48 }}>
              Instant collaborations <br /> for remote teams
            </div>
            <div
              className=" fw-bold  text-white "
              style={{
                letterSpacing: 2.5,
              }}
            >
              All in one for your remote team chats,
              <br /> collaboration and track projects
            </div>
            <div className="d-flex flex-row gap-2">
              <input className="border-0 rounded  w-25" placeholder="Email" />
              <Button className="border-0 rounded px-3 py-3">
                Get early access
              </Button>
            </div>
          </div>
        </div>
      </div>
      <News
        side={true}
        text={{
          title: "Your Hub for teamwork",
          description:
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
        }}
        image={image1}
      />
      <News
        side={false}
        text={{
          title: "Simple task management",
          description:
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
        }}
        image={image2}
      />
      <News
        side={true}
        text={{
          title: "Scheduling that actually works",
          description:
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.",
        }}
        image={image3}
      />
      <div className="fs-1 fw-bold text-center my-5">
        What people say about us
      </div>
      <CarouselComponent />
    </div>
  );
};
