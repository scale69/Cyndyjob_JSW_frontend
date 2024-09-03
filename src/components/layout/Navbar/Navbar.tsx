import Image from "next/image";
import Link from "next/link";
import DrawerNav from "./DrawerNav";
import NavDesk from "./NavDesk";

export default function Navbar() {
  return (
    <div className="fixed z-50 flex items-center justify-between bg-white w-full px-2 md:px-5 py-2 ">
      <Link href={"/"} className="flex items-center gap-2">
        {/* <Image
          src={"/favi.png"}
          style={{
            width: "50px",
            height: "50px",
          }}
          priority
          width={30}
          height={30}
          sizes="300"
          alt="logo"
        /> */}
        <span className="font-semibold text-pink-500">Japan Skill Work</span>
      </Link>
      <div className="md:hidden">
        <DrawerNav />
      </div>
      <div className="hidden md:flex float-end  ">
        <NavDesk />
      </div>
    </div>
  );
}
