import CardJob from "@/components/Card/CardJob";
import Search from "@/components/Seacrh/Search";
import type { Metadata, ResolvingMetadata } from "next";

export const metadata: Metadata = {
  title: "Tokutei-Ginou",
  description: "Lowongan kerja Tokutei-Ginou di Jepang",

  openGraph: {
    title: "Tokutei-Ginou",
    images: {
      url: "/favi.png",
      width: 800,
      height: 600,
    },
  },
};
export default function Page() {
  return (
    <div className="flex min-h-screen gap-10 flex-col pt-32">
      <div className="w-full flex justify-center">
        <span className="text-2xl font-semibold text-sky-700">
          Find Jobs Tokutei Ginou
        </span>
      </div>
      <Search />
      <div className="flex justify-center  pb-10   h-max w-full">
        <CardJob />
      </div>
    </div>
  );
}
