import { NextCustomPage } from "../../types/next";
import React from "react";
import NavBar from "../../components/NavBar";
import FooterCopy from "../../components/FooterCopy";

const Track: NextCustomPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen ">
        <h1>ติดตามสินค้า</h1>
      </div>
      <FooterCopy />
    </div>
  );
};
export default Track;
