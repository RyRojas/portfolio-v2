import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaReadme } from 'react-icons/fa';

export default function LinkButton({ link: { type, url } }) {
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

    case 'Case Study':
      return (
        <Link href={url} passHref>
          <a className="button smallButton">
            <div>
              <FaReadme /> {type}
            </div>
          </a>
        </Link>
      );

    default:
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="button smallButton"
        >
          <div>
            <FaGithub /> {type}
          </div>
        </a>
      );
  }
}
