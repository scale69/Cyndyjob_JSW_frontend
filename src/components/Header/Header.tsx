import Image from "next/image";
import Link from "next/link";
import Search from "../Seacrh/Search";
import { Button } from "antd";
import { Suspense } from "react";
import Transition from "@/utils/Framer/transition";

export default function Header() {
  return (
    <div className="relative flex flex-col text-slate-800 items-center md:flex-row md:justify-between h-full w-full bg-pink-200 px-5 py-20 md:px-10">
      <div className="">
        <h1 className="text-2xl font-semibold text-sky-700">
          Temukan Pekerjaan sesuai keinginanmu
        </h1>
        <p className="">Daftar dari Indonesia atau dari Jepang</p>
        <Link
          href="/about"
          className="py-2 mt-5 px-6 rounded-full flex items-center w-max gap-2 font-medium text-white bg-blue-500/90 hover:bg-blue-500 transition-all duration-500"
        >
          Daftar Sekarang
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </Link>
      </div>
      {/* <Transition> */}
      <div className="relative h-[400px] w-full lg:w-[700px] lg:h-[600px] ">
        <Image fill quality={75} src={"/work.png"} alt="work" className="" />
      </div>
      {/* </Transition> */}
      <div className="flex items-center gap-2 flex-col w-full left-0 absolute px-5 bottom-16 md:bottom-12 lg:px-0 lg:bottom-32">
        <Suspense>
          <Search />
        </Suspense>
        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* <span className="text-sky-600 italic text-sm">populer :</span> */}
          <div className="flex gap-4">
            <Link href={"/engineer"}>
              <Button>Engineer</Button>
            </Link>
            <Link href={"/tokutei-ginou"}>
              <Button>Tokutei Ginou</Button>
            </Link>
            {/* <Link href={"/tokuei-ginou/kaigo"}>
              <Button>Kaigo</Button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
