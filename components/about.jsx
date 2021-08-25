import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About Me</h2>
        <p>
          I enjoy bringing designs to life, creating maintainable backend
          services, and continuously learning new tech. Currently, I am dabbling
          in different frontend frameworks to go along with various pet backend
          projects.
        </p>

        <p>
          In my free time, I enjoy riding public transit, trying new food, and
          travelling to partake in the prior two.
        </p>
      </div>
    </section>
  );
}
