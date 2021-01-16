import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import markdownStyles from '../../components/markdown-styles.module.css';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import React from 'react';
import DateFormatter from '../../components/date-formatter';
import CoverImage from '../../components/cover-image';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

// post markdwon -> html template
const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-10 md:my-12 text-center md:text-left">
            Loading...
          </h1>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{post.title} | Yhancsx</title>
              {post?.ogImage?.url && (
                <meta property="og:image" content={post.ogImage.url} />
              )}
            </Head>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-10 md:my-12 text-center md:text-left">
              {post.title}
            </h1>
            <div className="mb-8 md:mb-16 sm:mx-0">
              <CoverImage title={post.title} src={post.coverImage} />
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 text-lg">
                <DateFormatter dateString={post.date} />
              </div>
              <div
                className={markdownStyles['markdown']}
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
