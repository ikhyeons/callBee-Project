"use client";
import TwBuilder from "@/src/4shared/TwBuilder";
import Image from "next/image";
import { useState } from "react";

function StreamBtn(props: { nickname: string; isStream: boolean }) {
  const [isHover, setIsHover] = useState(false);
  const builder = new TwBuilder("");

  const boxStyle = builder
    .setText("xs", "normal", "black", "center")
    .setDisplay("flex")
    .setMarginLeft(1)
    .setMarginRight(1)
    .setFlexDirection("col")
    .setFlexJustify("center")
    .setAlignItem("center")
    .setPosition("relative")
    .build();

  const btnStyle = builder
    .setCursor("pointer")
    .setBorder(isHover ? 8 : 4, "solid", `${props.isStream ? "cred" : "gray"}`)
    .setRadius(isHover ? "lg" : "full")
    .setSize(12, 12)
    .setTransition("border", 50, "ease-in")
    .build();

  const imageStyle = builder
    .setRadius(isHover ? "md" : "full")
    .setBorder("none", "solid", `${props.isStream ? "cred" : "gray"}`)
    .setTransition("border", 50, "ease-in")
    .setFilter(`${props.isStream ? null : "grayscale"}`)
    .build();

  const nicknameBox = builder
    .setPosition("absolute")
    .setText("x2s", "bold", "white", "center")
    .setTop(14)
    .setSize(16, 10)
    .build();

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={`${boxStyle}`}
    >
      <button className={`${btnStyle} flex`}>
        <Image
          width={40}
          height={40}
          className={`${imageStyle}`}
          src="/pictures/noImg.png"
          alt=""
        />
      </button>
      {isHover ? (
        <span className={`${nicknameBox}`}>{props.nickname}</span>
      ) : null}
    </div>
  );
}

export default StreamBtn;
