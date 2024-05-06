import React from "react";
import PopularCategoryLi from "./PopularCategoryLi";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularCategoryUl() {
  const twBuilder = new TwBuilder("");
  const ulStyle = twBuilder
    .setDisplay("grid")
    .setGridGap(4)
    .setGridTemplateColumns(5)
    .build();
  return (
    <ul className={`${ulStyle}`}>
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
      <PopularCategoryLi />
    </ul>
  );
}

export default PopularCategoryUl;
