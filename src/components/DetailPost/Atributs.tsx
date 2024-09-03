import { Card } from "antd";
import Link from "next/link";
import { BsTag } from "react-icons/bs";

export default async function Atributs({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[750px] lg:w-96">
      <Card
        title={
          <div className="flex items-center gap-2">
            <BsTag />
            <span>Tags</span>
          </div>
        }
      >
        <ul>
          {data.tags?.map((item: any) => (
            <li key={item.id} className="text-xs md:text-sm">
              <Link href={"#"}>{item.nama}</Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card
        title={
          <div className="flex items-center gap-2">
            <BsTag />
            <span>Saran Lainnya</span>
          </div>
        }
      ></Card>
      <Card
        title={
          <div className="flex items-center gap-2">
            <BsTag />
            <span>Terkini</span>
          </div>
        }
      ></Card>
      <Card
        title={
          <div className="flex items-center gap-2">
            <BsTag />
            <span>Lokasi</span>
          </div>
        }
      ></Card>
    </div>
  );
}
