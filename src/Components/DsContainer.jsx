import * as React from "react";

export default function (props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px",
        boxSizing: "border-box",
      }}
    >
      {props.children}
    </div>
  );
}
