"use client";
import React, { useState } from "react";
import { Button, Checkbox, Drawer, Input, Modal, Result, Select } from "antd";
import Apply from "./Apply";
import { SiWhatsapp } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import useSWR from "swr";
import { fetchProfile } from "@/lib/axios/action";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { SmileOutlined } from "@ant-design/icons";

const DrawerApply = ({ judul }: { judul: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [bInggris, setBInggris] = useState("");
  const [name, setName] = useState("");
  const [bJepang, setBJepang] = useState("");
  const [noJapan, setNoJapan] = useState("");
  const [handleInputKosong, setHandleInputKosong] = useState("");

  const { data, error, isLoading } = useSWR("Dataprofile", fetchProfile, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <>error</>;
  if (isLoading) return <></>;

  const url = process.env.NEXT_PUBLIC_URL_FRONTEND + pathname;
  let jurusan = "Tokutei-Ginou";
  if (pathname.includes("engineer")) {
    jurusan = "Engineer";
  }
  const message = `こんにちは、\nNama saya ${name}.
  \nSaya tertarik melamar posisi sebagai ${jurusan} yang tertera pada lowongan '${judul}'. \nSaya ${noJapan} memiliki kemampuan ${bInggris} bahasa Jepang ${bJepang}. \nSaya berharap bisa berkontribusi di lowongan tersebut. \nTerima kasih. \nBerikut adalah link lowongan yang saya temukan : \n${url} `;
  const waNumber = data[0]?.whatsapp.replace(/[+\-\s()]/g, "");
  const handleValue = (value: string) => {
    if (value.includes("Tidak Bisa Berbahasa Jepang")) {
      setNoJapan("tidak");
      setBJepang(" ");
    } else {
      setNoJapan("");
      setBJepang(`level ${value}`);
    }
  };
  const handleInput = (e: any) => {
    const { name, value } = e.target;

    const bahasa_inggris = e.target.checked;
    if (bahasa_inggris) {
      setBInggris("berbahasa Inggris dengan baik dan");
    }

    if (name === "name") {
      setName(value);
    }
  };
  const handleButtonSend = () => {
    if (!name || !bJepang) {
      setHandleInputKosong("Wajib Mengisi Form");
      return;
    }

    setHandleInputKosong("");
    Modal.success({
      content: (
        <Result
          icon={<SmileOutlined />}
          title={
            <div>
              <p>Terima kasih!</p>
              <p>Halaman akan dialihkan ke whatsapp admin</p>
            </div>
          }
        />
      ),
    });
    setOpen(false);

    setTimeout(() => {
      window.open(`//wa.me/${waNumber}?text=${message}`, "_blank");
      router.push("/thanks");
    }, 3000);
    setName("");
  };

  return (
    <>
      <button
        onClick={showDrawer}
        className="flex gap-2 items-center text-sm justify-center py-2 px-8 w-full  bg-pink-200 rounded-full text-slate-800"
      >
        Apply Job
        <SiWhatsapp />
        <FiSend />
      </button>
      <Drawer
        placement="bottom"
        title="Apply JOb"
        onClose={onClose}
        open={open}
      >
        <div className="flex flex-col h-full justify-end ">
          <div className="flex flex-col gap-5">
            <Input
              name="name"
              value={name}
              size="large"
              className="w-full"
              onChange={handleInput}
              style={{
                fontSize: "16px",
              }}
              required
              placeholder="Nama Lengkap"
            />
            <Select
              placeholder={"Level bahasa Jepang"}
              onChange={handleValue}
              title="tes"
              options={[
                {
                  value: "Level bahasa Jepang",
                  label: "Level bahasa Jepang",
                  disabled: true,
                },
                { value: "N1", label: "N1" },
                { value: "N2 ~ N2以上", label: "N2 ~ N2以上" },
                { value: "N3 ~ N3以上", label: "N3 ~ N3以上" },
                { value: "N4 ~ N4以上", label: "N4 ~ N4以上" },
                { value: "N4 / JFTA 2 以上", label: "N4 / JFT A2 (以上)" },
                { value: "N5以上", label: "N5以上" },
                {
                  value: "Tidak Bisa Berbahasa Jepang",
                  label: "Tidak Bisa Berbahasa Jepang",
                },
              ]}
            />
            <Checkbox onChange={handleInput}>Bisa Berbahasa Inggris?</Checkbox>
          </div>
          <div className="flex flex-col items-end h-full gap-5 justify-end  mb-5">
            <div>{handleInputKosong && <span>{handleInputKosong}</span>}</div>
            <button
              className="flex gap-2 items-center text-sm justify-center py-2 px-8 w-full md:w-max  bg-pink-200 rounded-full text-slate-800"
              onClick={handleButtonSend}
            >
              Apply
              <SiWhatsapp />
              <FiSend />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerApply;
