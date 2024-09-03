import { MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

export const MenuitemsUrl: MenuItem[] = [
  {
    key: "01",
    type: "item",
    label: <Link href={"/"}>Home</Link>,
  },
  {
    key: "7",
    type: "item",
    label: <Link href={"/engineer"}>Engineer</Link>,
  },

  {
    key: "10",
    type: "item",
    label: <Link href={"/tokutei-ginou"}>Tokutei Ginou</Link>,
  },
  {
    key: "14",
    type: "item",
    label: <Link href={"/about"}>About</Link>,
  },
];
