"use server";

import Slug from "@/components/DetailPost/slug";
import { getDetailPost } from "@/lib/axios/action";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // fetch data
  const product = await await getDetailPost(params.slug.replaceAll("-", " "));

  return {
    title: product[0]?.title,
    description: "Lowongan kerja engineer di Jepang",

    openGraph: {
      images: "/favi.png",
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug.replaceAll("-", " ");

  return <Slug slug={slug} />;
}
