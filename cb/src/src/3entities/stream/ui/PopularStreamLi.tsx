import React from "react";
import Image from "next/image";
import TwBuilder from "@/src/4shared/TwBuilder";

function PopularStreamLi() {
  const twBuilder = new TwBuilder("");
  const profile = twBuilder
    .setRadius("full")
    .setSize(10, 10)
    .setMarginRight(1)
    .build();
  return (
    <div>
      <Image
        src={"/pictures/displaySample.png"}
        width={260}
        height={200}
        className="mb-1 rounded-r05"
        alt="방송화면"
      />
      <div className="flex">
        <Image
          src={"/pictures/noImg.png"}
          width={24}
          height={24}
          className={`${profile}`}
          alt="이미지"
        />
        <div className="flex-1">
          <p className="text-sm">
            그리고 잠시 사이를 두어 나는 어무것도 할 수 없었다.
          </p>
          <p className="text-xs">잠자는오리</p>
          <div className="text-xs">배틀그라운드</div>
        </div>
      </div>
    </div>
  );
}

export default PopularStreamLi;
