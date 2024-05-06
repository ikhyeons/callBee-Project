import React from "react";
import Player from "./Player";
import TwBuilder from "@/src/4shared/TwBuilder";

function PlayerBox() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder.setSize("9/12", "auto").build();
  return (
    <div className={`${boxStyle}`}>
      <Player />
    </div>
  );
}

export default PlayerBox;
