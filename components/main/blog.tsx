import Link from 'next/link';
import React from 'react';
import Post from '../../types/post';
import CoverImage from '../cover-image';
import DateFormatter from '../date-formatter';
import PostPreview from '../blog/post-preview';
import Template from './template';

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Template>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </Template>
  );
}
