"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function todo() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  return (
    <div>
      <h1>Client Component</h1>
      <p>{todo.title}</p>
    </div>
  );
}
