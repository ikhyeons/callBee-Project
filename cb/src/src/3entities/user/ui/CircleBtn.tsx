import TwBuilder from "@/src/4shared/TwBuilder";
import React, { ReactElement } from "react";

function CircleBtn(props: { children: ReactElement }) {
  const twBuilder = new TwBuilder("");
  const circleBtn = twBuilder
    .setSize(12, 12)
    .setDisplay("flex")
    .setFlexJustify("center")
    .setAlignItem("center")
    .setFlexDirection("col")
    .setRadius("full")
    .setMarginLeft(2)
    .setMarginRight(2)
    .setBorder(2, "solid", "white")
    .build();

  return <button className={`${circleBtn}`}>{props.children}</button>;
}

export default CircleBtn;
