import { NextCustomPage } from "../../types/next";
import React from "react";
import NavBar from "../../components/NavBar";
import FooterCopy from "../../components/FooterCopy";
import NavLayout from "../../components/NavLayout";

const Track: NextCustomPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <h1>ติดตามสินค้า</h1>
      </div>
      <FooterCopy />
    </div>
  );
};
Track.Layout = NavLayout;
export default Track;
