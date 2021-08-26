import Hero from '../components/hero';
import About from '../components/about';
import Layout from '../components/layout';
import Projects from '../components/projects';
import Contact from '../components/contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
