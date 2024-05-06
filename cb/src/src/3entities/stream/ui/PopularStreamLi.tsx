import React from "react";
import Image from "next/image";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularStreamLi() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder.setSize(80, 48).build();
  return (
    <div className={`${boxStyle}`}>
      <Image
        src={"/pictures/displaySample.png"}
        alt="화면샘플"
        width={300}
        height={200}
      />
      화면샘플 이름 태그 제목 부제 시청자
    </div>
  );
}

export default PopularStreamLi;
