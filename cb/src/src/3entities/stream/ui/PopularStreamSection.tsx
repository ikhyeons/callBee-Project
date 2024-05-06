import TwBuilder from "@/src/4shared/TwBuilder";
import React from "react";
import PopularCategoryUl from "./PopularCategoryUl";

function PopularStreamSection() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setSize("3/4", "auto")
    .setMarginLeft("auto")
    .setMarginRight("auto")
    .build();
  return (
    <section className="bg-black19 pt-24">
      <section className={`${boxStyle}`}>
        <div className="mb-8">인기</div>
        <PopularCategoryUl />
        <div className="text-center">더보기</div>
      </section>
    </section>
  );
}

export default PopularStreamSection;
