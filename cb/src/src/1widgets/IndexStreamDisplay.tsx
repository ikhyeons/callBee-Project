import React from "react";
import StreamBox from "../3entities/stream/ui/StreamBox";
import IndexStreamList from "../3entities/stream/ui/IndexStreamList";

function IndexStreamDisplay() {
  return (
    <section>
      <StreamBox />
      <IndexStreamList />
    </section>
  );
}

export default IndexStreamDisplay;
