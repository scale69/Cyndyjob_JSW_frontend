import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/layout/Navbar/Navbar";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import Footer from "@/components/layout/Footer/Footer";
import PaymentStatus from "./PaymentStatus";

const inter = Inter({ subsets: ["latin"] });
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL_FRONTEND}`),
  title: {
    default: "Japan Skill Work",
    template: "%s | JSW",
  },
  description: "lowongan kerja di jepang",
  openGraph: {
    title: "Japan Skill Work",
    description: "lowongan kerja di jepang",
    images: {
      url: "/favi.png",
      width: 800,
      height: 600,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 ">
        <AntdRegistry>
          <PaymentStatus>
            <Navbar />
            <main className="flex min-h-screen flex-col">{children}</main>
            <Footer />
          </PaymentStatus>
        </AntdRegistry>
      </body>
    </html>
  );
}
