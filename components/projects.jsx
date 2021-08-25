import { projects } from './data/project-data';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className={styles.projectList}>
      {projects.map((project, i) => (
        <div key={i} className={styles.project}>
          <div className={styles.projectImage}>
            <Image
              src={project.img}
              alt={`Preview image of ${project.name}`}
              width={550}
              height={427}
              quality={100}
            />
          </div>
          <div className={styles.projectDetailsContainer}>
            <div className={styles.projectDetails}>
              <h3>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul>
                {project.tech.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <ul>
                {project.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noreferrer noopner">
                      <div>
                        {link.type.includes('Code') ? (
                          <FaGithub />
                        ) : (
                          <FaExternalLinkAlt />
                        )}
                        {link.text || link.type}
                      </div>
                    </a>
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
