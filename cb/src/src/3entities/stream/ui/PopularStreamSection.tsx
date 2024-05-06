import TwBuilder from "@/src/4shared/TwBuilder";
import React from "react";
import PopularStreamUl from "./PopularStreamUl";

function PopularStreamSection() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setSize("3/4", "auto")
    .setMarginLeft("auto")
    .setMarginRight("auto")
    .build();
  return (
    <section className="bg-black19 pt-12">
      <section className={`${boxStyle}`}>
        <div className="mb-8">인기 방송</div>
        <PopularStreamUl />
        <div className="text-center mt-8">더보기</div>
      </section>
    </section>
  );
}

export default PopularStreamSection;
