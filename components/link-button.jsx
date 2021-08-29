import Link from 'next/link';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReadme,
  FaRegFileAlt,
} from 'react-icons/fa';

export default function LinkButton({ link: { type, name, url } }) {
  switch (type) {
    case 'Demo':
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="button smallButton"
        >
          <div>
            <FaExternalLinkAlt /> {type}
          </div>
        </a>
      );

    case 'Code':
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="button smallButton"
        >
          <div>
            <FaGithub /> {name || type}
          </div>
        </a>
      );

    case 'Resume':
      return (
        <a
          href="/Rojas_Ryan_Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="button inverse-button"
        >
          <div>
            <FaRegFileAlt /> {type}
          </div>
        </a>
      );

    default:
      return (
        <Link href={url} passHref>
          <a className="button smallButton">
            <div>
              <FaReadme /> {name}
            </div>
          </a>
        </Link>
      );
  }
}
