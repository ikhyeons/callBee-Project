import React from "react";
import PopularStreamLi from "./PopularStreamLi";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularStreamUl() {
  const twBuilder = new TwBuilder("");
  const ulStyle = twBuilder
    .setDisplay("grid")
    .setGridGap(4)
    .setGridTemplateColumns(5)
    .setMarginBottom(12)
    .build();
  return (
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
      <PopularStreamLi />
      <PopularStreamLi />
      <PopularStreamLi />
      <PopularStreamLi />
      <PopularStreamLi />
      <PopularStreamLi />
    </ul>
  );
}

export default PopularStreamUl;
