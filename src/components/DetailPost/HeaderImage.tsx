import { Gambar } from "@/types/type";
import { Carousel } from "antd";
import Image from "next/image";

export default function HeaderImage({ images }: { images: Gambar[] }) {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay draggable effect="fade">
      {images.map((img: Gambar) => {
        let url_img_large = null;
        let url_img_small = null;
        if (img.formats && img.formats.large) {
          // jika  format large tersedia
          url_img_large = process.env.BASE_URL_BACKEND + img.formats.large.url;
          // url_img_small = process.env.BASE_URL_BACKEND + img.formats.small.url;
        } else if (img.formats && img.formats.small) {
          // jika hanya small yang tersedia
          url_img_small = process.env.BASE_URL_BACKEND + img.formats.small.url;
          url_img_large = null; // Atau berikan nilai default jika large tidak tersedia
        } else {
          // jika kedua format tidak tersedia
          url_img_large = null;
          url_img_small = null;
        }

        return (
          <div key={img.id} className="relative  h-[200px] md:h-[350px]">
            {url_img_large && (
              <Image
                src={url_img_large}
                alt="image-jobs"
                fill
                quality={75}
                className="object-cover"
              />
            )}
            {url_img_small && (
              <Image
                src={url_img_small}
                alt="image-jobs"
                fill
                quality={75}
                className="object-cover"
              />
            )}
          </div>
        );
      })}
    </Carousel>
  );
}
