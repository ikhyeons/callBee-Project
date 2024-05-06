import React from "react";
import Rogo from "../4shared/Rogo";
import TwBuilder from "../4shared/TwBuilder";
import SearchBar from "../2features/search/SearchBar";
import StreamRouter from "../3entities/user/ui/StreamRouter";
import UserBox from "../3entities/user/ui/userbox/UserBox";

function Header() {
  const twBuilder = new TwBuilder("");
  const headerStyle = twBuilder
    .setPosition("fixed")
    .setDisplay("flex")
    .setFlexJustify("around")
    .setAlignItem("center")
    .setBackgroundColor("black")
    .setSize("dvw", "20")
    .setTop(0)
    .build();

  const ulStyle = twBuilder.setMargin(2).setDisplay("flex").build();
  return (
    <header className={`${headerStyle} `}>
      <Rogo />
      <ul className={`${ulStyle}`}>
        <StreamRouter isStream={true} nickname="잠자는오리" />
        <StreamRouter isStream={true} nickname="금붕어" />
        <StreamRouter isStream={true} nickname="잠자리" />
        <StreamRouter isStream={true} nickname="늙은개미" />
        <StreamRouter isStream={false} nickname="고슴도치" />
        <StreamRouter isStream={false} nickname="우는고양이" />
        <StreamRouter isStream={false} nickname="문재인" />
        <StreamRouter isStream={false} nickname="기쁜메뚜기" />
        <StreamRouter isStream={false} nickname="방아깨비" />
        <StreamRouter isStream={false} nickname="사슴벌레" />
        <StreamRouter isStream={false} nickname="장수풍뎅이" />
      </ul>
      <SearchBar />
      <UserBox />
    </header>
  );
}

export default Header;
