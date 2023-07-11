import React from "react";

export const metadata = {
  title: "articles",
};
export default function layout({ children }) {
  console.log("children are ", children);
  return (
    <div>
      <h1
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "20px",
          margin: "30px auto",
          width: "fit-content",
        }}
      >
        Articles Layout
      </h1>
      <div>{children}</div>
    </div>
  );
}
