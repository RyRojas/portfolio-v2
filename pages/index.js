import Hero from '../components/hero';
import About from '../components/about';
import Layout from '../components/layout';
import Projects from '../components/projects';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  );
}
