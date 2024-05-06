import TwBuilder from "@/src/4shared/TwBuilder";
import React from "react";

function StreamLi(props: { isCurrent: boolean }) {
  const twBuilder = new TwBuilder("");

  const listStyle = twBuilder
    .setDisplay("flex")
    .setFlexJustify("around")
    .setAlignItem("center")
    .setSize("full", "1/6h")
    .setPadding(1)
    .setBorder(`${props.isCurrent ? 1 : 0}`, "solid", "cred")
    .build();

  const firstStyle = twBuilder
    .setDisplay("flex")
    .setFlex("1")
    .setFlexJustify("between")
    .build();

  const infoBox = twBuilder
    .setDisplay("flex")
    .setFlex("1")
    .setFlexDirection("col")
    .setFlexJustify("between")
    .build();

  const profileIcon = twBuilder
    .setSize(24, 18)
    .setBackgroundColor("subsColor")
    .setMarginRight(2)
    .build();

  return (
    <li className={`${listStyle}`}>
      <div className={`${profileIcon}`}>화면샘플</div>
      <div className={`${infoBox}`}>
        <div className={`${firstStyle}`}>
          <span>잠자는오리 &nbsp;</span>
          <div>1128명 시청 중</div>
        </div>
        <div>
          <span>태그</span>
          <span>태그</span>
          <span>태그</span>
          <span>태그</span>
          <span>태그</span>
          <span>태그</span>
        </div>
        <p>제목</p>
      </div>
    </li>
  );
}

export default StreamLi;
