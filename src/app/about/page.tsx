import CountUpWrapper from "@/CountUpWrapper";
import { CustomerIcon, FishIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="text-white">
      <div
        style={{
          backgroundImage: "url('/fish-farm.webp')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-64 relative"
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="md:w-2/5 mx-5 md:mx-0 flex flex-col md:ml-20 z-10 relative">
          <h1 className="text-3xl mb-5">About Us</h1>
          <p>
            VanThinhSeafoods is a family company specializing many kinds of
            fishes: Red Snapper, Red Mullet, Grouper, Barramundi, Emperor,
            Parrot, King Snapper, White Snapper, Sweeplip, Mahi Mahi, Pomfret,
            Leather Jacket, Ribbonfish, Black Tilapia, Red Tilapia, Octopus,
            Cuttlefish, Loligo Squids ... We have established for 10 years in
            order to keep a stable quality, a reasonable price and a full
            responsibility for all final buyers...
          </p>
        </div>
      </div>
      <section className="bg-black">
        <div
          style={{
            backgroundImage: "url('/bg-blur-blue2.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="py-36 md:max-w-8xl px-5 md:px-20 mb-80 md:mb-0"
        >
          <div>
            <div className="space-y">
              <div className="md:flex justify-between mb-10">
                <div className="space-y-4">
                  <h2 data-aos="fade-right" className="text-3xl">
                    Diem Quynh Seafoods
                  </h2>
                  <button className="bg-blue-300 px-10 py-4 rounded-full text-black">
                    Learn More
                  </button>
                </div>
                <div className="md:w-1/2 mt-5">
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, rem optio similique provident magnam dolorum earum,
                    veniam eos consequuntur deserunt modi fuga ad cum nesciunt
                    deleniti quaerat accusamus non odio!
                  </p> */}
                </div>
              </div>
            </div>
            <div className="md:flex md:space-x-10 h-72">
              <div className="md:w-1/2 h-full">
                <Image
                  className="h-full w-full"
                  src="/fishes/red_snapper/red_snapper_1.webp"
                  alt="count-img"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:flex w-full md:w-1/2 md:space-x-10 mt-5 justify-around">
                <div className="bg-blue-300 md:w-1/2 md:flex justify-start items-center md:pl-10 mb-5 py-10 md:py-0 md:mb-0 ">
                  <div className="space-y-2 flex items-center justify-around md:block">
                    <FishIcon size={10} color="white" />
                    <CountUpWrapper
                      end={50}
                      duration={3}
                      className="text-5xl font-bold"
                    />
                    <p>Fishes Type</p>
                  </div>
                </div>
                <div className="bg-blue-300 md:w-1/2 md:flex justify-start md:pl-10 items-center relative py-10 md:py-0">
                  <div className="md:block space-y-2 md:space-x-0 flex items-center justify-around">
                    <CustomerIcon size={10} color="white" />
                    <CountUpWrapper
                      end={120}
                      duration={3}
                      className="text-5xl font-bold"
                    />{" "}
                    <span className="absolute right-5 text-2xl">+</span>
                    <p>Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/bg-blur-3-2.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="md:flex justify-center mx-3 md:mx-10">
            <div className="md:w-1/2 ">
              <div>
                <Image
                  src="/barramundi_home_image.webp"
                  alt="img-fish-center"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:-mt-[50%]">
                <Image
                  className="w-full md:w-3/4 relative object-cover h-[500px] border-[10px] md:border-[20px] border-black"
                  src="https://res.cloudinary.com/dl54o5pzx/image/upload/v1692624012/vanthinh/video_voubrw.webp"
                  alt="video-barramundi"
                  width={500}
                  height={500}
                  unoptimized
                />
              </div>
            </div>
            <div className=" md:w-1/4 md:flex flex-wrap content-start">
              <div className=" bg-white rounded-lg  text-black p-8 md:mt-5 md:-ml-[20%]">
                <div className="space-y-5">
                  <Link href="/About" className="text-blue-300 text-xl">
                    About Us
                  </Link>
                  <h3 data-aos="fade-right" className="text-4xl font-bold">
                    WE PRODUCE THE BEST QUALITY SEA PRODUCT
                  </h3>
                  <p className="text-gray-400">
                    VanThinhSeafoods is a family company specializing many kinds
                    of fishes: Red Snapper, Red Mullet, Grouper, Barramundi,
                    Emperor, Parrot, King Snapper, White Snapper, Sweeplip, Mahi
                    Mahi, Pomfret, Leather Jacket, Ribbonfish, Black Tilapia,
                    Red Tilapia, Octopus, Cuttlefish, Loligo Squids ... We have
                    established for 10 years in order to keep a stable quality,
                    a reasonable price and a full responsibility for all final
                    buyers...
                  </p>
                  <div className="flex space-x-5">
                    <ul>
                      <li className="flex space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />{" "}
                        <span>High Quality</span>
                      </li>
                      <li className="flex space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />{" "}
                        <span>Fresh & Clean</span>
                      </li>
                      <li className="flex space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />{" "}
                        <span>Quality Certified</span>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />{" "}
                        <span>High Quality</span>
                      </li>
                      <li className="flex space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />{" "}
                        <span>Fresh & Clean</span>
                      </li>
                      <li className="flex space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />{" "}
                        <span>Quality Certified</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    className={cn(
                      buttonVariants,
                      "bg-blue-300 px-10 py-4 rounded-full"
                    )}
                    href="/about"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
