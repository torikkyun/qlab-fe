import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUsers,
  faGears,
  faBarsProgress,
  faArrowRightArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <nav className="sidebar bg-gray-100 p-4 flex flex-col" id="sidebar">
      <ul className="nav-links flex flex-col space-y-2">
        <li>
          <Link href="/dashboard" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <div className="icon w-6 text-center mr-3">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <span>Trang chủ</span>
          </Link>
        </li>
        <li>
          <Link href="/users" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <div className="icon w-6 text-center mr-3">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <span>Người dùng</span>
          </Link>
        </li>
        <li>
          <Link href="/devices" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <div className="icon w-6 text-center mr-3">
              <FontAwesomeIcon icon={faGears} />
            </div>
            <span>Thiết bị</span>
          </Link>
        </li>
        <li>
          <Link href="/projects" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <div className="icon w-6 text-center mr-3">
              <FontAwesomeIcon icon={faBarsProgress} />
            </div>
            <span>Dự án</span>
          </Link>
        </li>
        <li>
          <Link href="/loans" className="flex items-center p-2 hover:bg-gray-200 rounded">
            <div className="icon w-6 text-center mr-3">
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </div>
            <span>Mượn trả</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;