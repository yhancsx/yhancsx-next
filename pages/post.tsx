import Head from 'next/head';
import React from 'react';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import PostPreview from '../components/posts/post-preview';
import { getAllPosts } from '../lib/api';
import { default as PostType } from '../types/post';

type Props = {
  allPosts: PostType[];
};

const Post = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Posts | Yhancsx</title>
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
                description={post.description}
              />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Post;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'description']);

  return {
    props: { allPosts },
  };
};
