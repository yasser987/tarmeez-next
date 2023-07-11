import React from "react";

export default function page(props) {
  console.log(props); //Will appear in the terminal not the console
  //because this code is been rendering in server not client side
  return (
    <div>
      <h2>Show Title</h2>
      <h3>{props.params.title}</h3>
    </div>
  );
}
