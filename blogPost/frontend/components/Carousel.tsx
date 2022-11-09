import React from "react";
import { FeedBack } from "./FeedBack";

export const CarouselComponent = () => {
  const info = [
    {
      star: 5,
      text: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      author: {
        username: "Amy Klassen",
        picture: "Amy Klassen",
      },
    },

    {
      star: 5,
      text: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      author: {
        username: "Amy Klassen",
        picture: "Amy Klassen",
      },
    },

    {
      star: 5,
      text: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      author: {
        username: "Amy Klassen",
        picture: "Amy Klassen",
      },
    },

    {
      star: 5,
      text: "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      author: {
        username: "Amy Klassen",
        picture: "Amy Klassen",
      },
    },
  ];
  return (
    <div className="d-flex flex-row gap-3 overflow-scroll w-100">
      {info.map((el: any, ind: number) => {
        return (
          <FeedBack
            key={ind}
            star={el.star}
            text={el.text}
            author={el.author}
          />
        );
      })}
    </div>
  );
};
