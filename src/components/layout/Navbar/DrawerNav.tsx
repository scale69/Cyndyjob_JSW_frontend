"use client";
import { Button, Drawer, Space } from "antd";
import type { DrawerProps } from "antd";
import { useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import MenuPhone from "./MenuPhone";
import { TbMenuDeep } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";
export default function DrawerNav() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button
          className="shadow-none"
          style={{ border: 0 }}
          size={"large"}
          onClick={showDefaultDrawer}
        >
          {/* <MenuFoldOutlined /> */}
          <CgMenuRight size={24} />
        </Button>
      </Space>
      <Drawer placement="right" size={size} onClose={onClose} open={open}>
        <MenuPhone />
      </Drawer>
    </>
  );
}
