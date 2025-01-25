import Image from "next/image";
import React from "react";
import { CardType } from "../interfaces/CardType";

export const Card = (good: CardType | undefined) => {
  return (
    <div>
      <div className="">{good?.title}</div>
      <Image src={good?.image} fill width={30} height={30} alt={good?.title} />
    </div>
  );
};
