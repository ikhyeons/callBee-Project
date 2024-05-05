import React from "react";
import ProfileBtn from "../3entities/user/ui/ProfileBtn";
import Rogo from "../4shared/Rogo";
import TwBuilder from "../4shared/TwBuilder";

function Header() {
  const twBuilder = new TwBuilder("");
  const headerStyle = twBuilder
    .setDisplay("flex")
    .setBackgroundColor("slate-800")
    .setSize("full", "auto")
    .build();

  const ulStyle = twBuilder.setMargin(2).setDisplay("flex").build();
  return (
    <header className={`${headerStyle} `}>
      <Rogo />
      <ul className={`${ulStyle}`}>
        <ProfileBtn isStream={true} nickname="잠자는오리" />
        <ProfileBtn isStream={true} nickname="금붕어" />
        <ProfileBtn isStream={true} nickname="잠자리" />
        <ProfileBtn isStream={true} nickname="늙은개미" />
        <ProfileBtn isStream={false} nickname="고슴도치" />
        <ProfileBtn isStream={false} nickname="우는고양이" />
        <ProfileBtn isStream={false} nickname="문재인" />
        <ProfileBtn isStream={false} nickname="기쁜메뚜기" />
        <ProfileBtn isStream={false} nickname="방아깨비" />
      </ul>
    </header>
  );
}

export default Header;
