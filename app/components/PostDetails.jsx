import React from "react";

export default async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await request.json();
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
