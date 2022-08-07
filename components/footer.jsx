import { FaGithubSquare, FaDev, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <a
            href="https://github.com/RyRojas"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithubSquare size={25} title="Github" />
          </a>
          <a
            href="https://dev.to/ryrojas"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaDev size={25} title="Dev.to" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryrojas/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin size={25} title="LinkedIn" />
          </a>
        </div>
        <p className={styles.footerHeading}>Powered by cafecito</p>
      </div>
    </footer>
  );
}
