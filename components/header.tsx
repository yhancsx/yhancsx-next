import Link from 'next/link';
import { useState } from 'react';
import Linkedin from '../public/icons/linkedin';
import NavigationBar from '../public/icons/navigationBar';
import Container from './container';

const GITHUB = 'https://github.com/yhancsx';
const LINKEDIN = 'https://www.linkedin.com/in/yohan-bae/';
const NAVER = 'https://blog.naver.com/yhancsx';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <header className="border-b-2 mb-2 py-2">
      <Container>
        <div className="flex">
          <h2 className="flex items-end text-xl md:text-2xl">
            <Link href="/">
              <a className="">YHANCSX</a>
            </Link>
          </h2>
          <h2 className="hidden md:flex flex-1 justify-end items-end text-xl">
            <span className="ml-3">
              <Link href="/blog">Blog</Link>
            </span>
            <span className="ml-3">
              <Link href="/projects">Projects</Link>
            </span>
            <a className="ml-3" href={GITHUB} target="blank">
              G
            </a>
            <a style={{ height: '30px' }} className="ml-3" href={LINKEDIN} target="blank">
              <Linkedin />
            </a>
            <a className="ml-3" href={NAVER} target="blank">
              N
            </a>
          </h2>
          <div className="flex md:hidden flex-1 justify-end items-end text-xl">
            <div className="flex items-end flex-col relative">
              <button style={{ width: '30px', height: '30px' }} onClick={toggle}>
                <NavigationBar />
              </button>
              {open && <CollapsableNav />}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

const CollapsableNav = () => {
  const Row = ({
    children,
    href = '#',
  }: {
    children: React.ReactChild;
    href?: string;
  }) => (
    <a
      href={href}
      style={{ height: '30px' }}
      className="border-bottom  my-2 flex justify-center"
      target="blank"
    >
      {children}
    </a>
  );
  return (
    <div style={{ marginTop: '46px' }} className="absolute w-40 bg-gray-50">
      <Row>Blog</Row>
      <Row>Projects</Row>
      <Row href={GITHUB}>G</Row>
      <Row href={LINKEDIN}>
        <Linkedin />
      </Row>
      <Row href={NAVER}>N</Row>
    </div>
  );
};

export default Header;
