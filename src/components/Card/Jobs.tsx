import Image from "next/image";
import Link from "next/link";

export default function Jobs() {
  return (
    <div className="">
      <div className="relative bg-cover bg-no-repeat">
        <div className="container">
          <div className="max-w-md  mx-auto text-center">
            <h2 className="text-3xl font-bold">Blog Section 2</h2>
            <p className="text-base font-medium text-gray-500 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          {}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14">
            <div className="p-6 rounded-lg bg-white">
              <Image
                width={300}
                height={500}
                src={""}
                // src="assets/images/blog-4.jpg"
                className="rounded-lg"
                alt=""
              />
              <h2 className="text-xl font-bold mt-5">
                A Leading Global Agency In 15 Years.
              </h2>
              <p className="text-base font-semibold text-gray-500 mt-5">
                Lorem ipsum dolor sit amet consectetur Eius iusto debitis
                doloremque nulla reiciendis illum.
              </p>
              <div className="inline-block mt-6">
                <Link
                  href="#"
                  className="py-2 px-6 rounded-full flex items-center gap-2 font-medium text-white bg-blue-500/90 hover:bg-blue-500 transition-all duration-500"
                >
                  Selengkapnya
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
