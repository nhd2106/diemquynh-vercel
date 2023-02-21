import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import  CountUp from "react-countup";
import CustomerIcon from "~/utils/CustomerIcon";
import FishIcon from "~/utils/FishIcon";

function About() {
    return (
      <div className="text-white">
        <div style={{
          backgroundImage: "url('/fish-farm.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }} className="py-64 relative">
          <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full">
    
          </div>
         <div className="w-1/3 flex flex-col md:ml-20 z-10 relative">
         <h1 className="text-3xl mb-5">About Us</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta distinctio fuga doloremque odio blanditiis excepturi totam vero ea, facilis laudantium nesciunt enim nostrum alias explicabo eius, quam quis? Enim?</p>
         </div>
        </div>
<section className="bg-black ">
        <div
          style={{
            backgroundImage: "url('/bg-blur-blue2.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="py-36 md:max-w-8xl px-20 text-white"
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
                  src="fish-on-a-fish-market.webp"
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
                  src="/raw-dorado-fish.webp"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      
    )
  }
  
  
  export default About;
  