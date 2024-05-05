import React from "react";
import ProfileBtn from "./ProfileBtn";
import Link from "next/link";

function ProfileBtnRouter(props: { nickname: string; isStream: boolean }) {
  return (
    <Link href={"/1"}>
      <ProfileBtn nickname={props.nickname} isStream={props.isStream} />
    </Link>
  );
}

export default ProfileBtnRouter;
