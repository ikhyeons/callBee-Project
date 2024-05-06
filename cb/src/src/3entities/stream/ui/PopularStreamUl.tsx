import React from "react";
import PopularStreamLi from "./PopularStreamLi";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularStreamUl() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setDisplay("flex")
    .setSize("fm96", "auto")
    .setOverflow("y-hidden")
    .setOverflow("x-scroll")
    .build();

  const ulStyle = twBuilder.setDisplay("flex").setPadding(5).build();

  return (
    <div className={`${boxStyle}`}>
      <ul className={`${ulStyle}`}>
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
        <PopularStreamLi />
      </ul>
    </div>
  );
}

export default PopularStreamUl;
