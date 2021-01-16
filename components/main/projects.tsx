import React from 'react';
import Post from '../../pages/posts/[slug]';
import PostPreview from '../blog/post-preview';
import Template from './template';

export default function Projects({ projects }: { projects: Post[] }) {
  return (
    <Template>
      {projects.map((post) => (
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
