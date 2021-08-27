import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/dist/client/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <a>
          <Image
            src={logo}
            layout="fixed"
            height={75}
            width={75}
            alt="My logo."
          />
        </a>
      </Link>

      <nav>
        {router.pathname === '/' ? (
          <ul role="menubar" className={styles.navMenu}>
            <li role="presentation" className={styles.navMenuItem}>
              <Link href="/" role="menuitem">
                <a>Home</a>
              </Link>
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
        ) : null}
      </nav>
    </header>
  );
}
