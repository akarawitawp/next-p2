import { NextCustomPage } from "../../types/next";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import FooterCopy from "../../components/FooterCopy";

const OurService: NextCustomPage = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="flex flex-col justify-around ">
        <h1 className="w-[850px] h-[250px] text-7xl text-bold ml-[100px] mt-[200px]">
          รับสั่งสินค้าทุกเว็บในXXX และรับประมูล สั่งได้ตลอดวัน ราคาพิเศษตลอด
          <span className="text-orange-400"> 24 ชั่วโมง</span>
        </h1>
        <h2 className="text-4xl ml-[100px]">
          บริการครบวงจรสำหรับสายพรีออเดอร์ รวมถึงพ่อค้าแม่ค้าสายขายส่ง
        </h2>
      </div>
      <div className="ml-10 mt-10 ">
        <Link
          className=" ml-20 mt-50 w-[100px]  border border-1 bg-orange-500 rounded-xl text-white p-1 text-sm"
          href="/ContactUs"
        >
          ติดต่อสั่งสินค้า
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-10 w-full ml-auto mr-auto mt-20 ">
        <div className="w-40 h-40 ml-auto mr-auto border border-1 border-gray-500 ">
          <img
            className="scale-75 mt-[-50px]"
            src="https://w7.pngwing.com/pngs/71/953/png-transparent-white-and-blue-cruise-ship-cruise-ship-u5e86u7965u65c5u884cu793eu4e8bu4e1au6709u9650u516cu53f8-cartoon-ship-freight-transport-happy-birthday-vector-images-transport.png"
            alt="ship"
          />
          <h1 className="text-center mt-15">นำเข้าสินค้าจากญี่ปุ่น</h1>
        </div>
        <div className="w-40 h-40 ml-auto mr-auto border border-1 border-gray-500">
          <img
            className="scale-75 mt-[-50px]"
            src="https://cdn.pixabay.com/photo/2019/08/05/15/08/container-4386213_960_720.png"
            alt="container"
          />
          <h1 className="text-center mt-15">สั่งซื้อและนำเข้าจากญี่ปุ่น</h1>
        </div>
        <div className="w-40 h-40 ml-auto mr-auto border border-1 border-gray-500">
          <img
            className="scale-75 mt-[-100px]"
            src="https://png.pngtree.com/element_our/20200630/ourmid/pngtree-gavel-for-court-and-auction-image_2275244.jpg"
            alt="Auction"
          />
          <h1 className="text-center mt-15">บริการประมูลสินค้า</h1>
        </div>
        <div className="w-40 h-40 ml-auto mt-40 mr-auto border border-1 border-gray-500">
          <img
            className="scale-75 mt-[-100px]"
            src="https://img.freepik.com/free-vector/web-design-production-maintenance-websites-web-graphic-interface-design-responsive-website-software-engineering-development-colorful-icon_335657-2699.jpg?w=2000"
            alt="container"
          />
          <h1 className="text-center mt-15">สั่งซื้อสินค้าจากเว็บดัง</h1>
        </div>
        <div className="w-40 h-40 ml-auto mt-40 mr-auto border border-1 border-gray-500">
          <img
            className="scale-75 mt-[-100px]"
            src="https://img.freepik.com/premium-vector/hand-shake-hands-partnership-friends-welcome-handshake-vector-flat-cartoon-illustration-isolated_101884-890.jpg?w=2000"
            alt="container"
          />
          <h1 className="text-center mt-15">บริการให้เช่าไอดีประมูล</h1>
        </div>
        <div className="w-40 h-40 ml-auto mt-40 mr-auto border border-1 border-gray-500">
          <img
            className="scale-75 mt-[-100px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsdCkAgzrc73SJnduAU4R6p2yMU_3T9kvFQ&usqp=CAU"
            alt="container"
          />
          <h1 className="text-center mt-15">บริการจัดหาสินค้าตามสั่ง</h1>
        </div>
      </div>
      <div className="mt-[500px]">
        <FooterCopy />
      </div>
    </div>
  );
};
export default OurService;
