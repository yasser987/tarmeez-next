import Link from "next/link";
import React from "react";

export const metadata = {
  title: "artiles page",
};

export default function page() {
  return (
    <div>
      <h2>Articles Compnent</h2>
      <Link href="/posts">Go To Posts</Link>
    </div>
  );
}
