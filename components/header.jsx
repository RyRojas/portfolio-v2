import Image from 'next/image';
import logo from '../public/images/logo.png';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="My logo." />
      <nav>
        <ul role="menubar" className={styles.navMenu}>
          <li role="presentation" className={styles.navMenuItem}>
            <a href="#" role="menuitem">
              Home
            </a>
          </li>
          <li role="presentation" className={styles.navMenuItem}>
            <a href="#about" role="menuitem">
              About
            </a>
          </li>
          <li role="presentation" className={styles.navMenuItem}>
            <a href="#projects" role="menuitem">
              Work
            </a>
          </li>
          <li role="presentation" className={styles.navMenuItem}>
            <a href="#contact" role="menuitem">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
