import Link from 'next/link';
import Linkedin from '../public/icons/linkedin';
import Container from './container';

const Header = () => {
  return (
    <header className="border-b-2 mb-2 py-2">
      <Container>
        <div className="flex ">
          <h2 className="flex items-end text-xl md:text-2xl">
            <Link href="/">
              <a className="">YHANCSX</a>
            </Link>
          </h2>
          <h2 className="hidden flex-1 md:flex justify-end items-end text-xl">
            <Link href="/blog">
              <a className="ml-3">Blog</a>
            </Link>
            <Link href="/projects">
              <a className="ml-3">Projects</a>
            </Link>
            <Link href="/publications">
              <a className="ml-3">Publications</a>
            </Link>
            <a
              className="ml-3"
              href="https://github.com/yhancsx"
              target="blank"
            >
              G
            </a>
            <a
              className="ml-3"
              href="https://www.linkedin.com/in/yohan-bae/"
              target="blank"
            >
              <Linkedin />
            </a>
            <a
              className="ml-3"
              href="https://blog.naver.com/yhancsx"
              target="blank"
            >
              N
            </a>
          </h2>
        </div>
      </Container>
    </header>
  );
};

export default Header;
