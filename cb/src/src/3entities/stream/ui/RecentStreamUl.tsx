import TwBuilder from "@/src/4shared/TwBuilder";
import React from "react";
import RecentStreamLi from "./RecentStreamLi";

function RecentStreamUl() {
  const twBuilder = new TwBuilder("");
  const listBoxStyle = twBuilder
    .setSize("1/4", "auto")
    .setFlex("1")
    .setPaddingTop(1)
    .build();
  const ulStyle = twBuilder
    .setDisplay("flex")
    .setFlexDirection("col")
    .setFlexJustify("around")
    .setFlex("1")
    .setSize("auto", "fm24")
    .build();
  return (
    <div className={`${listBoxStyle}`}>
      <div className="h-6">최근 시청 목록</div>
      <ul className={`${ulStyle}`}>
        <RecentStreamLi isCurrent={true} />
        <RecentStreamLi isCurrent={false} />
        <RecentStreamLi isCurrent={false} />
        <RecentStreamLi isCurrent={false} />
        <RecentStreamLi isCurrent={false} />
        <RecentStreamLi isCurrent={false} />
      </ul>
    </div>
  );
}

export default RecentStreamUl;
