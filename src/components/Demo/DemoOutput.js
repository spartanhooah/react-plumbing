import { memo } from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// memo introduces a trade-off between re-rendering and comparing state
export default memo(DemoOutput);
