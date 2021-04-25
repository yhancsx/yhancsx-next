import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Container from '../../components/container';
import CoverImage from '../../components/cover-image';
import DateFormatter from '../../components/date-formatter';
import Layout from '../../components/layout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';

type Props = {
  post: PostType;
};

// post markdwon -> html template
const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-10 md:my-12 text-center md:text-left">
            Loading...
          </h1>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{post.title} | Yhancsx</title>
              {post?.ogImage && <meta property="og:image" content={post.ogImage} />}
            </Head>
            <div className="mt-12 mb-2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-none text-center md:text-left pb-1 ">
                {post.title}
              </h1>
              <div className="text-right mt-4 text-xl italic text-gray-500 font-bold">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
            <div className="mb-8 sm:mx-0">
              <CoverImage title={post.title} src={post.coverImage} />
            </div>
            <div className="max-w-2xl mx-auto">
              <div
                className="markdown"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
