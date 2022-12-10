import { NextCustomPage } from "../../types/next";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import FooterCopy from "../../components/FooterCopy";

const OurService: NextCustomPage = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen gap-2.5">
        <h1>บริการของเรา</h1>
      </div>
      <FooterCopy />
    </div>
  );
};
export default OurService;
