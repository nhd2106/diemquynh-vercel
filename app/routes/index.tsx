import { useNavigate, Link } from "@remix-run/react";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import CountUp from 'react-countup'

import LeafIcon from "~/utils/leafIcon";
import FishIcon from "~/utils/FishIcon";
import CustomerIcon from "~/utils/CustomerIcon";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div
        style={{
          backgroundImage: "url('/main_background.webp')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-96"
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full" />
        <div className="relative z-10 text-white">
          <div className=" flex justify-center flex-col items-center text-center">
            <h1 data-aos="fade-right" className="text-3xl md:text-6xl">
              FRESH FISH DELIVERED FOR YOU
            </h1>
            <p data-aos="fade-left" className="w-3/4 md:w-2/5 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni aperiam architecto eveniet? Voluptatibus quaerat libero a
              incidunt esse. Facilis illo ullam ut beatae quae quaerat neque
              repellendus fugiat quasi.
            </p>
            <div className="space-x-5 mt-5">
              <button
                onClick={() => navigate("/about")}
                className="rounded-full bg-blue-500 hover:bg-blue-600 py-4 px-14"
              >
                Read more
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="rounded-full hover:bg-black hover:bg-opacity-40 border py-4 px-14"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-full w-full text-white">
        <div className="flex justify-center space-x-1 py-20">
          <div className="flex md:flex-row flex-col justify-between px-5 md:max-w-7xl md:space-x-14 py-10">
            {[
              {
                title: "Certififed Farm",
                Icon: LeafIcon,
              },
              {
                title: "Organic Farm",
                Icon: LeafIcon,
              },
              {
                title: "High quality",
                Icon: LeafIcon,
              },
            ].map(({ title, Icon }, index) => (
              <div
                className="border-blue-300 border-2 py-16 px-5 mt-10 md:mt-0 space-y-6 md:space-y-0"
                key={index}
              >
                <div className="px-5 space-y-2">
                  <div className="cursor-pointer ">
                    <Icon size={5} color="#60a5fa" />
                  </div>
                  <h3 className="text-4xl"> {title}</h3>
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    excepturi placeat, illo eveniet odit aut repudiandae
                    provident laborum totam similique.
                  </div>
                  <button className="text-blue-400 flex space-x-1 items-center">
                    <span>Read more</span>{" "}
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-20">
          <div className="flex text-center space-x-3">
            <p>Don’t hesitate to contact us to get better Information.</p>
            <button onClick={() => navigate('/contact')} className="flex items-center text-blue-500 space-x-1">
              <span>Contact Our Sales</span>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* WELCOME */}

      <section className="bg-black">
        <div
          style={{
            backgroundImage: "url('/bg-blur-blue2.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="py-36 md:max-w-8xl px-20"
        >
          <div>
            <div className="space-y">
              <div className="flex justify-between mb-10">
                <div className="space-y-4">
                  <h2 data-aos="fade-right" className="text-3xl">Diem Quynh Seafoods</h2>
                  <button className="bg-blue-300 px-10 py-4 rounded-full">
                    Learn More
                  </button>
                </div>
                <div className="w-1/2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, rem optio similique provident magnam dolorum earum,
                    veniam eos consequuntur deserunt modi fuga ad cum nesciunt
                    deleniti quaerat accusamus non odio!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-10 h-72">
              <div className="w-1/2 h-full">
                <img
                  className="h-full w-full"
                  src="/fish-on-a-fish-market.webp"
                  alt="count-img"
                />
              </div>
              <div className="flex w-1/2 space-x-10">
                <div className="bg-blue-300 w-1/2 flex justify-start items-center pl-10">
                  <div className="space-y-2">
                  <FishIcon  size={10} color="white"/>
                  <CountUp end={50} duration={3} className="text-5xl font-bold"/>
                  <p>Fishes Type</p>
                  </div>
                </div>
                <div className="bg-blue-300 w-1/2 flex justify-start pl-10 items-center relative">
                  <div><CustomerIcon size={10} color="white"/>
                  <CountUp end={120} duration={3} className="text-5xl font-bold"/> <span className="absolute right-5 text-2xl">+</span>
                  <p>Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/bg-blur-3-2.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="md:flex justify-center mx-10">
            <div className="md:w-1/2 ">
              <div>
                <img
                  src="/red-meat-of-raw-fish.webp"
                  alt="img-fish-center"
                />
              </div>
              <div
                className="md:-mt-[50%]"
              >
                <img
                  className="md:w-3/4 relative "
                  style={{
                    border: "20px solid black",
                    objectFit: "cover",
                    height: "500px",
                  }}
                  src="/fisher_man.webp"
                  alt="fisher-man"
                />
              </div>
            </div>
            <div className=" md:w-1/4 md:flex flex-wrap content-start">
              <div
                className=" bg-white rounded-lg  text-black p-8 md:mt-5 md:-ml-[20%]"
              >
                <div className="space-y-5">
                  <Link to="/About" className="text-blue-300 text-xl">
                    About Us
                  </Link>
                  <h3 data-aos="fade-right" className="text-4xl font-bold">
                    WE PRODUCE THE BEST QUALITY SEA PRODUCT
                  </h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquid accusantium molestiae enim ab expedita delectus nam
                    minima aspernatur deserunt, pariatur sapiente eaque iure
                    eligendi necessitatibus possimus quibusdam? Earum, minima
                    omnis?
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
                  <button
                    className="bg-blue-300 px-10 py-4 rounded-full"
                    onClick={() => navigate("/about")}
                  >
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section
        className="relative"
        style={{
          backgroundImage:
            "url('/farm-salmon-fishing-aerial-fpv-drone-photography.webp')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          padding: "180px 0 180px 0",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black bg-opacity-50 absolute h-full w-full top-0 left-0"></div>
        <div className="relative z-10 flex justify-center text-center">
          <div className="space-y-5 md:w-1/3">
            <p className="text-xl">Contact Us</p>
            <h3 data-aos="fade-right" className="text-4xl font-bold">
              BECOME OUR CUSTOMER & GET SPECIAL OFFER EVERYDAY
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-4 rounded-full border hover:bg-black hover:bg-opacity-50"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <div 
        style={{
          backgroundImage: "url('/bg-blur-blue2.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-36 bg-black"
      >
      <section className="z-10">
        <div>
          <div className="md:flex justify-center">
            <div className="text-center md:w-2/5 space-y-5">
              <p className="text-xl text-blue-300">Our Product</p>
              <p data-aos="fade-right" className="text-4xl font-bold">
                THE PRODUCT THAT WE PROVIDE FOR YOU IS HIGH QUALITY
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                eaque autem maiores a enim consequatur soluta velit non natus
                dolorem?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-5 z-10">
        <div className="md:flex justify-center space-x-10 mr-auto ml-auto relative w-3/4">
          {[
            {
              imageUrl:
                "/red-meat-of-raw-fish.webp",
                productName: 'Barramundi'
            },
            {
              imageUrl:
                "/red-meat-of-raw-fish.webp",
                productName: 'Grouper Fillet'
            },
            {
              imageUrl:
                "/red-meat-of-raw-fish.webp",
                productName: 'Red Barramundi'
            },
          ].map(({ imageUrl, productName }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>
                <img src={imageUrl} alt="red-meat-of-raw-fish" />
              </div>
              <div className="bg-white text-black -mt-5 mr-10 mb-0 ml-10 px-10 py-2 rounded-md font-bold" >
                <h3 className="text-2xl">{productName}</h3>
                <button className="text-blue-300 flex items-center space-x-2">
                  <span>View product</span>
                  <ArrowRightIcon className="w-5 h-5"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="relative text-center">
        <div className="-mt-36 z-0">
          <img className="object-cover w-full" style={{
            height: '500px',
            filter: "brightness( 67% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )"
          }} src="barramundi-on-ice.webp" alt="barrmundi" />
        </div>
      </div>
      </div>
    </div>
  );
}
