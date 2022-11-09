/* eslint-disable @next/next/no-img-element */
import router from "next/router";
import React from "react";

export const Post = ({ child }: { child: any }) => {
  return (
    <div
      className="flex gap-3 mt-3  col-4 "
      style={{ width: "408px", height: "440px" }}
      onClick={() => router.push(`${child._id}`)}
    >
      <div
        className="card w-100 h-100 "
        style={{ borderRadius: "30px", cursor: "pointer" }}
      >
        <img
          className="card-img-top"
          src={child?.image}
          alt={child?.image}
          style={{ borderRadius: "30px" }}
          height={"200px"}
        />
        <div className="card-body">
          <h5 className="card-title">{child?.title}</h5>
          <p className="card-text">{child?.description}</p>
        </div>
        <div className="card-body d-flex align-items-center gap-3">
          <img
            src={child?.author?.image}
            alt={child?.author?.image}
            width={40}
          />
          <div className="text-muted">{child?.author?.email}</div>
          <div className="text-muted">{child?.author?.name}</div>
        </div>
      </div>
    </div>
  );
};
