import { NextCustomPage } from "../types/next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FooterCopy from "../components/FooterCopy";

const HomePage: NextCustomPage = () => {
  return (
    <div className="h-screen w-full ">
      <NavBar />
      <div className="mx-auto mt-[180px] flex flex-col justify-center items-center">
        <h1 className="w-[500px] h-[100px] text-5xl text-bold text-center leading-18">
          นำสินค้าเข้าจากXXX <br />
          เริ่มต้นที่ <span className="text-orange-400">180 บาท</span>
        </h1>
        <h2 className="mx-auto">
          รับขนสินค้าจากญี่ปุ่นมาไทย
          <span className="text-orange-400">พร้อมถึงหน้าบ้านคุณ</span>
        </h2>
        <Link
          className=" mt-5  border border-1 bg-orange-500 rounded-md text-white p-1 text-sm "
          href="/Track"
        >
          ติดตามสินค้า
        </Link>
      </div>
      <div className="mt-[180px]">
        <FooterCopy />
      </div>
    </div>
  );
};
export default HomePage;
