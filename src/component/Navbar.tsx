import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
  return (
    <nav className="bg-gray-200">
      <div className="flex justify-between items-center w-[92%] mx-auto">
        <Image
          src="/logo.png"
          width={65}
          height={65}
          alt="logo"
          className="w-16 cursor-pointer"
        />
        <div className="nav-links duration-500 md:static absolute bg-gray-500 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link href={'/'} className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:text-gray-500">
                Home
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign In
            </button>
            <FontAwesomeIcon
              icon={faBars}
              onClick="onToggleMenu(this)"
              name="menu"
              className="text-3xl cursor-pointer md:hidden"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
