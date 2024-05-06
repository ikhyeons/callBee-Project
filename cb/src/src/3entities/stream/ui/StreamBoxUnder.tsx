import TwBuilder from "@/src/4shared/TwBuilder";
import React from "react";

function StreamBoxUnder() {
  const twBuilder = new TwBuilder("");
  const boxStyle = twBuilder
    .setSize("full", "under")
    .setBackgroundColor("black19")
    .build();

  return <div className={`${boxStyle}`}>StreamBoxUnder</div>;
}

export default StreamBoxUnder;
