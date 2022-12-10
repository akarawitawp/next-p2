import { NextCustomPage } from "../../types/next";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import FooterCopy from "../../components/FooterCopy";

const FormLogin: NextCustomPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-2.5">
        <h1>เข้าสู่ระบบ</h1>
        <form>
          <label>
            UserName:
            <br />
            <input
              className="border border-1 border-black"
              type="text"
              name="name"
              placeholder="UserName"
            />
          </label>
          <br />
          <label>
            PassWord:
            <br />
            <input
              className="border border-1 border-black"
              type="text"
              name="prassword"
              placeholder="รหัสผ่าน"
            />
          </label>
          <br />
          <input
            className="mx-auto text-center cursor-pointer border border-1 border-orange bg-orange-400"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <FooterCopy />
    </div>
  );
};
export default FormLogin;
