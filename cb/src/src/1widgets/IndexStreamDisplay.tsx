import React from "react";
import PlayerBox from "../3entities/stream/ui/PlayerBox";
import RecentStreamUl from "../3entities/stream/ui/RecentStreamUl";
import TwBuilder from "../4shared/TwBuilder";

function IndexStreamDisplay() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setDisplay("flex")
    .setSize("full", "3/5dvh")
    .build();
  return (
    <section className={`${boxStyle}`}>
      <PlayerBox />
      <RecentStreamUl />
    </section>
  );
}

export default IndexStreamDisplay;
