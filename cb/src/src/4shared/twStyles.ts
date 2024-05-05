export default {
  background: {
    color: ["bg-slate-800"],
  },
  cursor: ["pointer", "wait", "text", "move", "help", "not-allowed"],

  position: ["absolute", "relative", "fixed", "sticky", "static"],
  top: ["top-0", "top-4", "top-12", "top-14", "top-16", "top-20"],
  bottom: ["bottom-0"],
  left: ["left-0"],
  right: ["right-0"],

  display: ["flex", "grid", "block", "span"],
  flex: {
    direction: ["flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse"],
  },
  justify: [
    "justify-normal",
    "justify-start",
    "justify-end",
    "justify-center",
    "justify-between",
    "justify-around",
    "justify-evenly",
    "justify-stretch",
  ],
  items: [
    "items-start",
    "items-end",
    "items-center",
    "items-baseline",
    "items-stretch",
  ],

  text: {
    size: ["text-x2s", "text-xs", "text-sm", "text_base", "text-lg", "text-xl"],
    weight: [
      "font-thin",
      "font-extralight",
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-extrabold",
      "font-black",
    ],
    align: ["text-left", "text-center", "text-right", "text-start", "text-end"],
  },
  margin: {
    plane: ["m-1", "m-2", "m-3", "m-4"],
    top: ["mt-0", "mt-1", "mt-2"],
    bottom: ["mb-0", "mb-1", "mb-2"],
    left: ["ml-0", "ml-1", "ml-2"],
    right: ["mr-0", "mr-1", "mr-2"],
  },
  padding: {
    plane: ["p-1", "p-2", "p-4"],
    top: ["pt-0", "pt-1"],
    bottom: ["pb-0"],
    left: ["pl-0"],
    right: ["pr-0", "pr-2"],
  },

  transition: {
    target: ["transition-border"],
    duration: [
      "duration-50",
      "duration-100",
      "duration-120",
      "duration-150",
      "duration-300",
    ],
    type: ["ease-in-out", "ease-linear", "ease-in"],
  },

  filter: ["grayscale"],

  border: {
    size: [
      "border-0",
      "border-1",
      "border-2",
      "border-3",
      "border-4",
      "border-5",
    ],
    type: [
      "border-solid",
      "border-dashed",
      "border-dotted",
      "border-double",
      "border-hidden",
      "border-none",
    ],
    color: ["border-black", "border-gray", "border-cred", "border-subsColor"],
    raidus: ["rounded-full", "rounded-lg"],
  },

  hover: {
    border: {
      size: [
        "hover:border-0",
        "hover:border-1",
        "hover:border-2",
        "hover:border-3",
        "hover:border-4",
        "hover:border-5",
        "hover:border-6",
      ],
      type: ["hover:border-solid"],
      color: [
        "hover:border-black",
        "hover:border-gray",
        "hover:border-cred",
        "hover:border-subsColor",
      ],
      raidus: ["hover:rounded-lg", "hover:rounded-md"],
    },
  },

  boxSize: {
    w: ["full", "auto", "w-10", "w-11", "w-12", "w-16", "w-18", "w-20", "h-24"],
    h: ["full", "auto", "h-10", "h-11", "h-12", "h-16", "h-18", "h-20", "h-24"],
  },

  before: ['before:content-["Subs"]', "before:text-subsColor"],
  after: ['after:content-["Subs"]', "after:text-subsColor"],
};
