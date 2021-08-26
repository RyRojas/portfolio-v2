import styles from '../styles/About.module.css';

export default function About() {
  const SKILLS = [
    'React',
    'Redux',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'Angular',
    'Node.js',
    'Express',
    'Git',
    'MongoDB',
    'postgreSQL',
    'AWS',
    'HTML',
    'CSS',
    'Bootstrap',
    'Material UI',
  ];

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

      <div className={styles.skillsContainer}>
        <h3>What I{`'`}ve been working with lately</h3>
        <ul>
          {SKILLS.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
