import {
  faChevronRight,
  faEnvelope,
  faGlobe,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4>About Us</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
            <div className="mb-5">
              <h4>Useful Link</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Home
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> About Us
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Services
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Term of Services
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4>Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Web Desingn
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Web Development
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Product Management
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Software
                    Development
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'/'}>
                    <FontAwesomeIcon icon={faChevronRight} /> Mobile Apps
                    Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4>Contact</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <Link href={'tel:09834549329'}>
                    <FontAwesomeIcon icon={faMobile} /> 09834549329
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href={'mailto:jakir.ruet@outlook.com'}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    jakir.ruet@outlook.com
                  </Link>
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faGlobe} />
                  Alokar More, Ghoramara, Boalia, Rajshahi-6100
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
