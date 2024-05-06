import React from "react";
import PopularCategoryUl from "./PopularCategoryUl";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularCategorySection() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setSize("4/5", "auto")
    .setMarginLeft("auto")
    .setMarginRight("auto")
    .build();

  return (
    <section className="bg-black19 pt-12 pb-24">
      <section className={`${boxStyle}`}>
        <div className="mb-8 flex justify-between">
          <span>인기 카테고리</span>
          <button>더보기</button>
        </div>
        <PopularCategoryUl />
      </section>
    </section>
  );
}

export default PopularCategorySection;
