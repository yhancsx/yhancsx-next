import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../types/post';
import React from 'react';
import PostPreview from '../components/blog/post-preview';

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog | yhancsx</title>
        </Head>
        <Container>
          <Intro />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-2 mb-32">
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
