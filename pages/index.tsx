import { NextCustomPage } from "../types/next";
import Link from "next/link";
import NavBar from "../components/NavBar";
import FooterCopy from "../components/FooterCopy";

const HomePage: NextCustomPage = () => {
  return (
    <div className="h-screen w-full ">
      <NavBar />
      <div className="mx-auto mt-[350px] flex flex-col justify-center items-center">
        <h1 className="w-[500px] h-[100px] text-5xl text-bold text-center">
          นำสินค้าเข้าจากญี่ปุ่น <br />
          เริ่มต้นที่ <span className="text-orange-400">180 บาท</span>
        </h1>
        <h2 className="mx-auto">
          รับขนสินค้าจากญี่ปุ่นมาไทย
          <span className="text-orange-400">พร้อมถึงหน้าบ้านคุณ</span>
        </h2>
      </div>
      <div className="mt-[500]">
        <FooterCopy />
      </div>
    </div>
  );
};
export default HomePage;
