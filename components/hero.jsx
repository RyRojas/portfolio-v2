import Image from 'next/image';
import headshot from '../public/images/headshot.jpg';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Image
          src={headshot}
          alt="My beautiful face smiling back at you."
          height={200}
          width={200}
          priority={true}
        />
        <div className={styles.heroText}>
          <h1>Hello, I{`'`}m Ryan</h1>
          <div>
            <p>A full stack developer based in Portland, OR</p>
          </div>
          <a href="#projects" className="button">
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
}
