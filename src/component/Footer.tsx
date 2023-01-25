import {
  faChevronRight,
  faEnvelope,
  faGlobe,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                  <FontAwesomeIcon icon={faChevronRight} /> Home
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> About Us
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Services
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Term of Services
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Privacy Policy
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4>Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Web Desingn
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Web Development
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Product Management
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Software Development
                </li>
                <li className="pb-4">
                  <FontAwesomeIcon icon={faChevronRight} /> Mobile Apps
                  Development
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4>Contact</h4>
              <p>
                <FontAwesomeIcon icon={faMobile} /> 09834549329
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                jakir.ruet@outlook.com
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} />
                Alokar More, Ghoramara, Boalia, Rajshahi-6100
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
