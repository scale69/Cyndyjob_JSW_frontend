"use client";

import { Button, Card, Result } from "antd";
import {
  SmileOutlined,
  UserAddOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { fetchProfile } from "@/lib/axios/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { error } from "console";
import useSWR from "swr";

import type { Metadata, ResolvingMetadata } from "next";

export const metadata: Metadata = {
  title: "Thanks",

  openGraph: {
    images: {
      url: "/favi.png",
      width: 800,
      height: 600,
    },
  },
};
export default function Page() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR("dataWa", fetchProfile, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <>error</>;
  if (isLoading) return <>loading</>;
  //   const data =  fetchProfile();

  function goBack() {
    window.history.back();
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Result
        icon={<SmileOutlined />}
        title={
          <div className="flex flex-col gap-5">
            <div>
              <p>Pengajuan telah di proses!</p>
              <p className="italic text-base">
                * Pastikan untuk mengirim data ke nomor yang tertera di bawah
                ini.
              </p>
            </div>
            <div className="flex gap-2 flex-col md:flex-row border p-10 rounded-lg shadow-md">
              <div className="flex flex-col justify-center items-center bg-sky-300 py-2 rounded-full text-base w-full">
                <div className="flex items-center gap-2">
                  <UserOutlined />
                  <span className="text-bas">{data[0]?.name}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-sky-300 py-2 rounded-full text-base w-full">
                <div className="flex items-center gap-2">
                  <WhatsAppOutlined />
                  <span className="text-bas">{data[0]?.whatsapp}</span>
                </div>
              </div>
            </div>
          </div>
        }
        extra={
          <Button onClick={router.back} type="primary">
            Back
          </Button>
        }
      />
    </div>
  );
}
