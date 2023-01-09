import { NextCustomPage } from "../../types/next";
import React from "react";
import NavBar from "../../components/NavBar";
import FooterCopy from "../../components/FooterCopy";
import Link from "next/link";
import HomePage from "..";
import NavLayout from "../../components/NavLayout";

const ContactUs: NextCustomPage = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.831971120271!2d104.87790221535585!3d15.276956464237552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311687b0f211cb0d%3A0xc2c9abd61b5a8cec!2sHell%20Factory%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1670655418090!5m2!1sth!2sth"
        width="100%"
        height="300"
      ></iframe>
      <div className="flex justify-start item-start">
        <div className="ml-5 flex flex-col w-[400px] border">
          <h1 className="text-bold text-lg">ข้อมูลติดต่อ</h1>
          <div className="grid grid-cols-2 ">
            <h2 className="mt-5">เบอร์ติดต่อ</h2>
            <h2 className="mt-5">
              086-xxx-xxxx
              <br />
              092-xxx-xxxx
            </h2>
            <h2>อีเมล</h2>
            <h2>Krexpress.sale.@xxx.com</h2>
            <h2>LINE ID</h2>
            <h2>@Krexpress</h2>
            <h1 className="w-[300px] mt-5 text-bold text-lg ">
              ที่ตั้งโกดังรับสินค้า xxxxxxx
            </h1>
            <br />
            <h1 className="mt-5 w-[300px]">
              Nakano-shi Yoshida 93-2, Nakano-ken (Phone number : 08049171771)
            </h1>
          </div>
          <Link
            className="mt-5 border rounded-xl bg-orange-400 p-1 text-white text-center"
            href="https://goo.gl/maps/7UWKf64XSbBtvrxp9"
            target="_blank"
          >
            location
          </Link>
        </div>

        <div className="flex flex-col ml-5 w-[400px] border">
          <h1 className="text-bold text-lg">ที่อยู่บริษัท</h1>
          <div className="grid grid-cols-2 ">
            <h1 className="w-[300px] mt-5 text-bold text-lg ">
              ที่ตั้งโกดังรับสินค้า xxxxxxxx
            </h1>
            <br />
            <h1 className="mt-5 w-[300px]">
              Nakano-shi Yoshida 93-2, Nakano-ken (Phone number : 08049171771)
            </h1>
          </div>
          <Link
            className="mt-5 border rounded-xl bg-orange-400 p-1 text-white text-center"
            href="https://goo.gl/maps/7UWKf64XSbBtvrxp9"
            target="_blank"
          >
            location
          </Link>
        </div>
      </div>
      <div className="">
        <FooterCopy />
      </div>
    </div>
  );
};
ContactUs.Layout = NavLayout;
export default ContactUs;
