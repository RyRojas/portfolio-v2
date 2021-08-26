import { projects } from './data/project-data';
import LinkButton from './link-button';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projectList}>
      {projects.map((project, i) => (
        <div key={i} className={styles.project}>
          <div className={styles.projectImage}>
            <Image
              src={project.img}
              alt={`Preview image of ${project.name}`}
              width={600}
              height={465}
              quality={100}
            />
          </div>
          <div className={styles.projectDetailsContainer}>
            <div className={styles.projectDetails}>
              <h3>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.projectTech}>
                {project.tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <ul>
                {project.links.map((link, i) => (
                  <li key={i}>
                    <LinkButton link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
