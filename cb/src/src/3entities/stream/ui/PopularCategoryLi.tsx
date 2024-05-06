import React from "react";
import Image from "next/image";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularCategoryLi() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder.setSize("1/6", 80).build();
  return (
    <div className={`${boxStyle}`}>
      <Image
        src={"/pictures/battleground.png"}
        alt="화면샘플"
        width={240}
        height={320}
      />
      <p>배틀그라운드</p>
      <p>
        <span className="text-xs">시청자 3.3k ㆍ 라이브 95개</span>
      </p>
    </div>
  );
}

export default PopularCategoryLi;
