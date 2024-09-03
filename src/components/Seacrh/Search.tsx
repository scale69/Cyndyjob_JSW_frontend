"use client";
import { Input, Select, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { useState } from "react";

export default function Search() {
  // const [query, setQuery] = useState('')
  const { Search } = Input;

  const router = useRouter();
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("");
  const [vs, setVs] = useState("");

  const bahasa = [
    {
      value: "",
      label: "",
    },
    {
      value: "N1",
      label: "N1",
    },
    {
      value: "N2",
      label: "N2",
    },
    {
      value: "N3",
      label: "N3",
    },
    {
      value: "N4",
      label: "N4",
    },

    {
      value: "N5",
      label: "N5",
    },
    {
      value: "JFT A2",
      label: "JFT A2",
    },
    {
      value: "JFT BASIC",
      label: "JFT BASIC",
    },
  ];
  const visa = [
    {
      value: "Engineer",
      label: "Engineer",
    },
    {
      value: "Tokutei-Ginou",
      label: "Tokutei-Ginou",
    },
  ];

  return (
    <div className="flex justify-center">
      <Space direction="vertical">
        <Space.Compact>
          <Select
            style={{ width: 150 }}
            options={bahasa}
            placeholder="Level Bahasa"
            size="large"
            onChange={(value) => setLang(value)}
          />
          <Select
            options={visa}
            placeholder="Visa"
            size="large"
            style={{ width: 150 }}
            onChange={(value) => setVs(value)}
          />
        </Space.Compact>

        <div className="w-[330px] md:w-[700px]">
          <Search
            placeholder="Cari Lowongan"
            allowClear
            enterButton
            size="large"
            onSearch={() =>
              router.push(`/search?query=${query}&lang=${lang}&vs=${vs}`)
            }
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                router.push(`/search?query=${query}&lang=${lang}&vs=${vs}`);
              }
            }}
          />
        </div>
      </Space>
    </div>
  );
}
