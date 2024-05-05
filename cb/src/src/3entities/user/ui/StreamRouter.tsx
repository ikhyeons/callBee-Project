import React from "react";
import StreamBtn from "./StreamBtn";
import Link from "next/link";

function StreamRouter(props: { nickname: string; isStream: boolean }) {
  return (
    <Link href={"/1"}>
      <StreamBtn nickname={props.nickname} isStream={props.isStream} />
    </Link>
  );
}

export default StreamRouter;
