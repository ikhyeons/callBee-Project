import React from "react";
import Image from "next/image";

function PopularCategoryLi() {
  return (
    <div>
      <Image
        src={"/pictures/displaySample.png"}
        width={260}
        height={200}
        alt="방송화면"
      />
      <div className="flex">
        <Image src={"/"} width={48} height={48} alt="이미지" />
        <div className="flex-1">
          <p>그리고 잠시 사이를 두어 나는 어무것도 할 수 없었다.</p>
          <p>잠자는오리</p>
          <p>카테고리 목록들</p>
        </div>
      </div>
    </div>
  );
}

export default PopularCategoryLi;
