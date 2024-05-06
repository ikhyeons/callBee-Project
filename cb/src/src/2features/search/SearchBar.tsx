import TwBuilder from "@/src/4shared/TwBuilder";
import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const twBuilder = new TwBuilder("");

  const searchBarBoxStyle = twBuilder
    .setDisplay("flex")
    .setFlexJustify("between")
    .setSize(72, 10)
    .setRadius("r1")
    .setPaddingLeft(2)
    .setBorder(2, "solid", "slate-500")
    .setBackgroundColor("slate-600")
    .build();

  const searchBarStyle = twBuilder
    .setOutlineNone()
    .setSize(64, "auto")
    .setPaddingLeft(1)
    .setRadius("r1")
    .setText("base", "normal", "white", "left")
    .setBackgroundColor("slate-600")
    .build();

  const searchBtnStyle = twBuilder
    .setRadius("r05")
    .setRadius("r1")
    .setSize(8, "auto")
    .setBackgroundColor("slate-600")
    .build();

  return (
    <div className={`${searchBarBoxStyle}`}>
      <input className={`${searchBarStyle}`} type="text" />
      <button className={`${searchBtnStyle}`}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
