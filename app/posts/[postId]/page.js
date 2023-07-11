import React, { Suspense } from "react";
import PostDetails from "../../components/PostDetails";

export default async function SpecificPost({ params }) {
  return (
    <div>
      <h1>theSpecific Post</h1>
      <Suspense>
        <PostDetails postId={params.postId} />
      </Suspense>
    </div>
  );
}
