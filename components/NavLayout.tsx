import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import NavBar from "./NavBar";
import ToggleNavBar from "./ToggleNavBar";

type NavLayoutProps = {
  children?: ReactNode;
};
const NavLayout: React.FC<NavLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main
      className={twMerge(
        "flex flex-col justify-center items-center",
        "max-w-screen-lg mx-auto"
      )}
    >
      <div className="flex justify-between w-screen ">
        <div className="z-10 ">
          <ToggleNavBar />
        </div>
        <div className="z-10 ">
          <NavBar />
        </div>
      </div>
      <div className="mt-[10px]">{children}</div>
    </main>
  );
};
export default NavLayout;
