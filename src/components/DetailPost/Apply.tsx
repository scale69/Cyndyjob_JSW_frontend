"use client";
import { fetchProfile } from "@/lib/axios/action";
import { FiSend } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import useSWR from "swr";

export default function Apply() {
  const { data, error, isLoading } = useSWR("Dataprofile", fetchProfile, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  if (error) return <>error</>;
  if (isLoading) return <>loading</>;

  const name = "nama kamu";
  const message = `Perkenalkan nama saya ${name}. \nSaya ingin mendaftar  `;
  const waNumber = data[0]?.whatsapp.replace(/[+\-\s()]/g, "");

  return (
    <a
      href={`//wa.me/${waNumber}?text=${message}`}
      target="_blank"
      className="flex gap-2 items-center text-sm justify-center py-2 px-8  bg-pink-200 rounded-full text-slate-800"
    >
      Apply Job
      <SiWhatsapp />
      <FiSend />
    </a>
  );
}
