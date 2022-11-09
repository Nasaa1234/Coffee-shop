import React from "react";
import { Button } from "react-bootstrap";

export const News = ({
  side,
  text,
  image,
}: {
  side: boolean;
  text: any;
  image: any;
}) => {
  return (
    <div
      className="d-flex align-items-center justify-content-between gap-5"
      style={{
        flexDirection: side ? "row" : "row-reverse",
      }}
    >
      <div className="d-flex flex-column gap-4">
        <div className="fs-1 fw-bold">{text.title}</div>
        <div className="text-black w-75 fs-5">{text.description}</div>
        <Button className="w-25" variant="link">
          Learn more --&gt;
        </Button>
      </div>
      <div className="">
        <img src={image?.default?.src} />
      </div>
    </div>
  );
};
