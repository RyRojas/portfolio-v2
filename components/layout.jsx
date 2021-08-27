import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({
  children,
  title = 'Ryan Rojas | Full Stack Developer',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I'm Ryan Rojas a full stack developer in Portland, OR. Welcome to my portfolio."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.ryrojas.com/" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
