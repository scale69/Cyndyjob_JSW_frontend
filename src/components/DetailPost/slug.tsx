import { getDetailPost } from "@/lib/axios/action";
import { Data } from "@/types/type";
import MarkDown from "../MarkDown";
import { TfiLocationPin } from "react-icons/tfi";
import { CiClock1 } from "react-icons/ci";
import { BsCurrencyYen, BsTag } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import HeaderImage from "./HeaderImage";
import { formatDistanceToNowStrict } from "date-fns";
import { id } from "date-fns/locale";
import Apply from "./Apply";
import { usePathname } from "next/navigation";
import DrawerApply from "./DrawerApply";
import { Card } from "antd";
import Atributs from "./Atributs";
export default async function Slug({ slug }: { slug: string }) {
  const data = await getDetailPost(slug);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start  gap-5 w-full h-full py-32 p-5">
      <div className="flex w-full md:w-[750px] rounded-md justify-center shadow-md p-5 md:p-10 bg-white h-full ">
        {data.map((item: Data) => {
          const uploadTime = new Date(item.createdAt);

          // Hitung jarak waktu antara sekarang dengan waktu upload
          const timeAgo = formatDistanceToNowStrict(uploadTime, {
            locale: id,
          });
          return (
            <div key={item.id} className="flex flex-col w-full ">
              <div className="flex flex-col border-b-2 w-full pb-5  gap-4 border-sky-700">
                <span className="text-2xl font-semibold text-sky-700">
                  {item.title}
                </span>
                {/*  */}
                <div className="py-2 flex flex-col gap-2">
                  <div className="flex text-xs gap-2 items-center">
                    <span>{timeAgo} lalu</span>
                    <CiClock1 />
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="flex text-xs gap-2 items-center">
                      <TfiLocationPin />
                      <span>{item.lokasi}</span>
                    </div>
                  </div>
                  {/*  */}
                  <div className="w-full flex justify-between">
                    <div className="flex text-xs gap-2 items-center">
                      <BsCurrencyYen />
                      <span>{item.gaji}</span>
                    </div>
                    {item.bonus && (
                      <div className="flex text-xs gap-2 items-center">
                        <span>Bonus</span>
                        <FaCheck />
                      </div>
                    )}
                  </div>
                  {/*  */}
                  <div className="w-full flex justify-between">
                    <div className="flex text-xs gap-2 items-center">
                      <MdOutlineVerified />
                      <span>{item.category}</span>
                    </div>
                    <div className="flex flex-col text-xs gap-2  items-end">
                      {item.bahasa_inggris && <span>English 🇬🇧</span>}
                      <span>{item.bahasa} 🇯🇵</span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="w-max">
                  {/* <Apply /> */}
                  <DrawerApply judul={item.title} />
                </div>
              </div>
              <div className="pt-5">
                <HeaderImage images={item.gambar || []} />
              </div>

              <div className="text-sm prose ">
                <MarkDown isi={item.selengkapnya || ""} />
              </div>
              <div className="pt-10 pb-4 w-full">
                <DrawerApply judul={item.title} />
              </div>
            </div>
          );
        })}
      </div>
      <Atributs data={data[0]} />
    </div>
  );
}
