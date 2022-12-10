import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className=" flex w-full h-20 text-2xl items-center justify-end gap-5 mr-10">
      <ul>
        <Link className="a mr-10 text-sm" href="/">
          หน้าแรก
        </Link>
        <Link className="a mr-10 text-sm" href="/OurService">
          บริการของเรา
        </Link>
        <Link className="a mr-10 text-sm" href="/Track">
          ติดตามสินค้า
        </Link>
        <Link className="a mr-20 text-sm" href="/ContactUs">
          ติดต่อเรา
        </Link>
        <Link
          className="mr-10 border border-1 bg-orange-500 rounded-md text-white p-2 text-sm"
          href="/FormLogin"
        >
          เข้าสู่ระบบ
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
