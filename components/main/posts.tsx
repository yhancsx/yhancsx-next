import React from 'react';
import Post from '../../types/post';
import PostPreview from '../posts/post-preview';

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          description={post.description}
        />
      ))}
    </article>
  );
}
