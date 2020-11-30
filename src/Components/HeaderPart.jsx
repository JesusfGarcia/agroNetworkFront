import * as React from "react";

export default function HeaderPart(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #81c784",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      {props.children}
    </div>
  );
}
