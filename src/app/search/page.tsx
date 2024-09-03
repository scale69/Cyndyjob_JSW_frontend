import CardJob from "@/components/Card/CardJob";
import Slug from "@/components/DetailPost/slug";
import Search from "@/components/Seacrh/Search";
import { fetchSearch } from "@/lib/axios/action";
import { BsSearch } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import type { Metadata, ResolvingMetadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Cari kerja di Jepang",

  openGraph: {
    images: {
      url: "/favi.png",
      width: 800,
      height: 600,
    },
  },
};
export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; lang: string; vs: string };
}) {
  const { query, lang, vs } = searchParams;
  // const data = await fetchSearch(query, lang, vs);
  // console.log(data);

  return (
    <div className="flex min-h-screen gap-10 flex-col pt-32">
      <div className="w-full flex gap-2 flex-col items-center justify-center">
        <span className="text-2xl font-semibold text-sky-700">
          Hasil Pencarian
        </span>
        <div className="flex items-center gap-2">
          <BsSearch />
          <span className="italic font-semibold">
            {query} {lang} {vs}
          </span>
        </div>
      </div>
      <Search />
      <div className="flex justify-center  pb-10   h-max w-full">
        <CardJob title={query} bahasa={lang} category={vs} />
      </div>
    </div>
  );
}
