"use client";
import { Button, Menu, MenuProps } from "antd";
import Link from "next/link";
import { MenuitemsUrl } from "./linkMenus";

export default function NavDesk() {
  const onClick: MenuProps["onClick"] = (e) => {};

  return (
    <div className="w-max">
      <Menu
        onClick={onClick}
        mode="horizontal"
        style={{ border: 0, padding: 10 }}
        items={MenuitemsUrl}
        className="shadow-none hidden md:flex border-none w-full h-full rounded-lg"
      />
    </div>
  );
}
