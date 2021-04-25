import Link from 'next/link';
import { useState } from 'react';
import { GITHUB, LINKEDIN, NAVER } from '../public/assets/constant';
import Github from '../public/icons/github';
import Linkedin from '../public/icons/linkedin';
import Naver from '../public/icons/naver';
import NavigationBar from '../public/icons/navigationBar';
import Container from './container';

const IconLinks: [string, JSX.Element][] = [
  [LINKEDIN, <Linkedin />],
  [GITHUB, <Github />],
  [NAVER, <Naver />],
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <header className="border-b-2 mb-2 py-4">
      <Container>
        <div className="flex">
          <h2 className="flex items-end text-xl md:text-3xl tracking-wide">
            <Link href="/">
              <a className="font-black -mb-2 text-gray-200">YHANCSX</a>
            </Link>
          </h2>
          <h2 className="hidden md:flex flex-1 justify-end items-end text-xl">
            <span className="ml-3">
              <Link href="/blog">Blog</Link>
            </span>
            <span className="ml-3">
              <Link href="/projects">Projects</Link>
            </span>
            {IconLinks.map(([link, icon]) => (
              <IconAnchor key={link} href={link}>
                {icon}
              </IconAnchor>
            ))}
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

const IconAnchor = ({ href = '', children = <></> }) => (
  <a style={{ height: '20px' }} className="ml-3 mb-1" href={href} target="blank">
    {children}
  </a>
);

const CollapsableNav = () => {
  const Row: React.FC<{ href?: string }> = ({ children, href }) => (
    <a
      href={href}
      style={{ height: '20px' }}
      className="border-bottom  my-2 flex justify-center text-base"
      target="blank"
    >
      {children}
    </a>
  );
  return (
    <div style={{ marginTop: '46px' }} className="absolute w-40 bg-gray-50">
      <Row>
        <Link href="/blog">Blog</Link>
      </Row>
      <Row>
        <Link href="/projects">Projects</Link>
      </Row>
      {IconLinks.map(([link, icon]) => (
        <Row key={link} href={link}>
          {icon}
        </Row>
      ))}
    </div>
  );
};

export default Header;
