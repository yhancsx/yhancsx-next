import { AppProps } from 'next/app';
import '../styles/hilight.scss';
import '../styles/index.css';
// import '../styles/markdown.scss';
import '../styles/markdown_github.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
