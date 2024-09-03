"use client";

import { Card } from "antd";
import Image from "next/image";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineAppRegistration } from "react-icons/md";
import { PiReadCvLogoThin } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";
import { VscGitStashApply } from "react-icons/vsc";
import { FaUserGroup } from "react-icons/fa6";
import useSWR from "swr";
import { fetchProfile } from "@/lib/axios/action";
import {
  ArrowRightOutlined,
  SmileOutlined,
  UserAddOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function Page() {
  const { data, error, isLoading } = useSWR("profile", fetchProfile, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <>error</>;
  if (isLoading) return <>loading</>;
  const waNumber = data[0]?.whatsapp.replace(/[+\-\s()]/g, "");
  return (
    <div className="flex  py-24 w-full h-full px-5 ">
      <div className="w-full flex flex-col gap-20 bg-white h-full py-24 rounded-md p-5 ">
        <div className="w-full flex flex-col gap-10">
          {/* <div className="flex items-center gap-2 w-full bg-pink-100 px-4 py-2">
            <AiOutlineExclamationCircle size={20} className="text-sky-600" />
            <span className="text-xl text-sky-600 font-semibold">
              Cara melakukan pendaftaran
            </span>
          </div> */}
          <div className="flex flex-row items-center gap-2 text-xl border-b-2 pb-2 ">
            <MdOutlineAppRegistration size={20} />
            <span> Cara melakukan pendaftaran</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card hoverable>
              <div className="flex flex-col  items-center gap-5 justify-center">
                <PiReadCvLogoThin size={50} />
                <span className="font-semibold">CV/Rirekisho (履歴書)</span>
                {/* <span className="text-xs text-slate-600 max-w-xs text-center">
                  Pastikan untuk mengguakan CV/Rirekisho (履歴書) dalam format
                  bahasa jepang. Template yang digunakan harus berdasarkan
                  template standar format dari Jepang
                </span> */}
              </div>
            </Card>
            <Card hoverable>
              <div className="flex flex-col  items-center gap-5 justify-center">
                <TfiSearch size={50} />
                <span className="font-semibold">Find JOB</span>
                {/* <span className="text-xs text-slate-600 max-w-xs text-center">
                  Temukan lowongan pekerjaan sesuai skillmu, pastikan untuk
                  membaca semua persyaratan yang tersiedia
                </span> */}
              </div>
            </Card>
            <Card className="bg-sky-200" hoverable>
              <div className="flex flex-col  items-center gap-5 justify-center">
                <VscGitStashApply size={50} />
                <span className="font-semibold">Apply</span>
                {/* <span className="text-xs text-slate-600 max-w-xs text-center">
                  Apply job melalui whatsapp, pastikan nomor wahatsapp tujuan
                  sama dengan nomor whatsapp yang ada di website ini
                </span> */}
              </div>
            </Card>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-row items-center gap-2 text-xl border-b-2 pb-2 ">
            <MdOutlineAppRegistration size={20} />
            <span>Proses</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className=" flex  justify-center items-center rounded-lg border bg-pink-100 py-16 ">
              <div className="flex flex-col  items-center gap-5 justify-center">
                <PiReadCvLogoThin size={100} />
                <span className="font-semibold">Pemeriksaan Berkas</span>
              </div>
            </div>
            <div className=" flex  justify-center items-center rounded-lg border bg-pink-100 py-16 ">
              <div className="flex flex-col  items-center gap-5 justify-center">
                <FaUserGroup size={100} />
                <span className="font-semibold">Wawancara</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div
            id="contact"
            className="flex flex-row items-center gap-2 text-xl w-full border-b-2 pb-2 "
          >
            <MdOutlineAppRegistration size={20} />
            <span>Contact</span>
          </div>
          <div className="grid  w-full text-xs ">
            <div className=" flex  justify-center items-center rounded-lg border px-5 py-16 w-full ">
              <div className="flex flex-col  items-center gap-5 justify-center">
                <div className="flex gap-10 items-center">
                  <PiReadCvLogoThin size={100} />
                  <ArrowRightOutlined className="text-[20px]" />
                  <WhatsAppOutlined className="text-[70px]" />
                </div>
                <div className="flex flex-col gap-5 w-full">
                  <div>
                    <p className="italic text-base">
                      * Pastikan untuk mengirim data ke nomor yang tertera di
                      bawah ini.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-col md:flex-row border p-10 rounded-lg shadow-md">
                    <div className="flex flex-col justify-center items-center bg-sky-300 py-2 rounded-full text-sm w-full">
                      <div className="flex items-center gap-2">
                        <UserOutlined />
                        <span className="text-bas">{data[0]?.name}</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-sky-300 py-2 rounded-full text-sm w-full">
                      <div className="flex items-center gap-2">
                        <WhatsAppOutlined />
                        <span className="text-bas">{data[0]?.whatsapp}</span>
                      </div>
                    </div>
                  </div>
                  <span className="w-full flex items-center justify-center">
                    atau
                  </span>
                  <a
                    target="_blank"
                    className="flex flex-col justify-center items-center bg-sky-300 py-2 rounded-full text-sm w-full"
                    href={`//wa.me/${waNumber}`}
                  >
                    Hubungi Admin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
