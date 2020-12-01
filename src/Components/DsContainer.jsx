import * as React from "react";

export default function DSContainer(props) {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px",
        boxSizing: "border-box",
        overflowY: "scroll",
      }}
    >
      {props.children}
    </div>
  );
}
