import React from "react";
import StreamBox from "../3entities/stream/ui/StreamBox";
import RecentStreamList from "../3entities/stream/ui/RecentStreamList";
import TwBuilder from "../4shared/TwBuilder";

function IndexStreamDisplay() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setDisplay("flex")
    .setSize("full", "3/5dvh")
    .build();
  return (
    <section className={`${boxStyle}`}>
      <StreamBox />
      <RecentStreamList />
    </section>
  );
}

export default IndexStreamDisplay;
