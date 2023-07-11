import Link from "next/link";
import React from "react";
import Todo from "../components/Todo.jsx";

export const metadata = {
  title: "Posts Page",
};
export default async function page() {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await request.json();

  const postsJsx = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        style={{ width: "80%", textDecoration: "none" }}
      >
        <div
          style={{
            backgroundColor: "teal",
            color: "white",
            fontSize: "15px",
            borderRadius: "15px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          <h3 style={{ margin: "0" }}>{post.title}</h3>
          <p style={{ margin: "0" }}>{post.body}</p>
        </div>
      </Link>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Posts Component</h2>
      <Link href="/articles">Go To Articles</Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {postsJsx}
      </div>
    </div>
  );
}
