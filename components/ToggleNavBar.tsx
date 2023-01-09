import Link from "next/link";
import { useState } from "react";
import { FaRegListAlt, FaMixer } from "react-icons/fa";

const ToggleNavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <aside>
      <div className=" flex w-52 bg-gray-1000 h-10 text-2xl items-center justify-start ml-10 ">
        <div className="navbar">
          <div className="navbar-toggle">
            <button className="menu-bar">
              <FaRegListAlt onClick={toggleMenu} />
            </button>
          </div>
        </div>
      </div>

      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item">
          <li className="navbar-toggle ">
            <button className="menu-bar mt-5 ml-[10px] scale-150">
              <FaMixer onClick={toggleMenu} />
            </button>
          </li>
          <Link className=" ml-10 my-5 text-sm hover:text-orange-500 " href="/">
            หน้าแรก
          </Link>

          <Link
            className=" ml-10 my-5 text-sm hover:text-orange-500"
            href="/OurService"
          >
            บริการของเรา
          </Link>

          <Link
            className=" ml-10 my-5 text-sm hover:text-orange-500"
            href="/Track"
          >
            ติดตามสินค้า
          </Link>
          <Link
            className=" ml-10 my-5 text-sm hover:text-orange-500"
            href="/ContactUs"
          >
            ติดต่อเรา
          </Link>
          <Link
            className="ml-10 my-5 border border-1 bg-orange-500 rounded-md text-white p-2 text-sm"
            href="/FormLogin"
          >
            เข้าสู่ระบบ
          </Link>
        </ul>
      </nav>
    </aside>
  );
};
export default ToggleNavBar;
