import React from "react";
import Rogo from "../4shared/Rogo";
import TwBuilder from "../4shared/TwBuilder";
import SearchBar from "../2features/search/SearchBar";
import ProfileBtnRouter from "../3entities/user/ui/ProfileBtnRouter";

function Header() {
  const twBuilder = new TwBuilder("");
  const headerStyle = twBuilder
    .setDisplay("flex")
    .setAlignItem("center")
    .setBackgroundColor("slate-800")
    .setSize("full", "auto")
    .setFlexJustify("around")
    .build();

  const ulStyle = twBuilder.setMargin(2).setDisplay("flex").build();
  return (
    <header className={`${headerStyle} `}>
      <Rogo />
      <ul className={`${ulStyle}`}>
        <ProfileBtnRouter isStream={true} nickname="잠자는오리" />
        <ProfileBtnRouter isStream={true} nickname="금붕어" />
        <ProfileBtnRouter isStream={true} nickname="잠자리" />
        <ProfileBtnRouter isStream={true} nickname="늙은개미" />
        <ProfileBtnRouter isStream={false} nickname="고슴도치" />
        <ProfileBtnRouter isStream={false} nickname="우는고양이" />
        <ProfileBtnRouter isStream={false} nickname="문재인" />
        <ProfileBtnRouter isStream={false} nickname="기쁜메뚜기" />
        <ProfileBtnRouter isStream={false} nickname="방아깨비" />
      </ul>
      <SearchBar />
    </header>
  );
}

export default Header;
