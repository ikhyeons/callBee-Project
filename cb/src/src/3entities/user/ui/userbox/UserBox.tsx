import React from "react";
import Stock from "./Stock";
import AlarmBtn from "@/src/3entities/alarm/ui/AlarmBtn";
import UserProfile from "./UserProfile";
import TwBuilder from "@/src/4shared/TwBuilder";

function UserBox() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder.setDisplay("flex").build();
  return (
    <div className={`${boxStyle}`}>
      <Stock />
      <AlarmBtn />
      <UserProfile />
    </div>
  );
}

export default UserBox;
