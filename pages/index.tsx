import Container from '../components/container';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../types/post';
import Blog from '../components/main/blog';
import Projects from '../components/main/projects';
import Publications from '../components/main/publications';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Yhancsx </title>
        </Head>
        <Container>
          <section className="flex flex-col md:flex-row-reverse md:mt-16 mb-16 md:mb-12">
            <section className="ml-5 w-1/2 md:w-1/4">
              <img width="100%" src="/assets/home/avatar.jpeg" />
            </section>
            <section className="flex-1">
              <span>Hello, I`m</span>
              <h2 className="text-4xl mt-2 md:text-6xl font-bold">Yohan Bae</h2>
              <h4 className="text-lg mt-5">
                I'm interested in Data Visualization using D3.js, SVG, Canvas
                and WebGL. <br />
                I boost customer experience with interactions and animations.
                <br />
                Currently Front-end Engineer at{' '}
                <a
                  href="https://navercorp.com"
                  className="text-green-600 font-bold hover:underline"
                >
                  Naver Corporation.
                </a>
              </h4>
              <br />
              <h4 className="text-lg mt-5">
                Follow me by{' '}
                <a
                  className="hover:underline font-bold"
                  href="https://github.com/yhancsx"
                  target="blank"
                >
                  Github
                </a>
                ,{' '}
                <a
                  className="hover:underline font-bold"
                  href="https://www.linkedin.com/in/yohan-bae/"
                  target="blank"
                >
                  LinkedIn
                </a>
                , or{' '}
                <a
                  className="hover:underline font-bold"
                  href="https://blog.naver.com/yhancsx"
                  target="blank"
                >
                  Naver Blog.
                </a>
              </h4>
            </section>
          </section>
          <section className="mt-2">
            <SectionTitle link="/blog" title="Blog" />
            <Blog posts={allPosts.slice(0, 3)} />
          </section>
          <section className="mt-2">
            <SectionTitle link="/projects" title="Projects" />
            <Projects />
          </section>
          <section className="mt-2">
            <SectionTitle link="/publications" title="Publications" />
            <Publications />
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

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

const SectionTitle = ({ title = '', link = '' }) => (
  <Link href={link}>
    <h2 className="hover:underline text-4xl md:text-6xl font-bold border-b-2 mb-2 pb-3">
      {title}
    </h2>
  </Link>
);
