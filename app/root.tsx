import {
  type MetaFunction,
  type LinksFunction,
  json,
  type LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import AOS from "aos";
import aos from "aos/dist/aos.css";

import Header from "~/components/Header";
import styles from "./styles/tailwind.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: aos },
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/manifest.json" },
    {
      rel: "icon",
      href: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      href: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
  ];
};

export const meta: MetaFunction = (context) => {
  return {
    charset: "utf-8",
    title: context?.data?.title ?? "DiemQuynh Seafoods",
    description: `${context?.data.companyName} Co., Ltd  Specializing in premium seafood, VanThinh Seafoods offers a select range of products including barramundi, grouper, red mullet, and more, sustainably sourced from Vietnam's rich marine biodiversity. Delivering quality to the USA, Europe, Australia, and the UAE. Contact us today to learn more about our products and services.`,
    viewport: "width=device-width,initial-scale=1",
    keywords: `${context?.data.keywords}`,
    "og:title": context?.data?.ogTitle ?? "DiemQuynh Seafoods",
    "og:description": `${context?.data.companyName} Co., Ltd  Specializing in premium seafood, VanThinh Seafoods offers a select range of products including barramundi, grouper, red mullet, and more, sustainably sourced from Vietnam's rich marine biodiversity. Delivering quality to the USA, Europe, Australia, and the UAE`,
    "og:image": `https://${context?.data.domain}/${context?.data.logo}`,
    "og:url": `https://${context?.data.domain}`,
    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
    "google-site-verification": "NWMvKALI1mH8HLOjpl8Zrx_jJOEcD7TVqCqPJYvPNCQ",
  };
};

export const loader: LoaderFunction = async (context) => {
  const host = context.request.headers.get("host") as string;
  const isDQ = host.indexOf("diemquynh") !== -1;
  const logo = isDQ ? "DIQ_logo.webp" : "vanthinh-logo.webp";
  const domain = isDQ ? "diemquynhseafoods.com" : "vanthinhseafoods.com";
  const companyName = isDQ ? "DiemQuynhSeafoods" : "VanThinhSeafoods";
  const title =
    "VanThinh Seafoods - Premium Barramundi, Grouper, and More from Vietnam";
  const ogTitle = `VanThinh Seafoods - Premium Barramundi, Grouper, and More from Vietnam`;
  const keywords = `${
    isDQ ? "Van Thinh Seafood" : "Diemquynh Seafood"
  }, Vietnamese barramundi, grouper, red mullet, goldband snapper, leather jacket fish, mahi mahi, parrotfish, sillago whiting, seafood supplier, sustainable seafood`;
  return json({ logo, domain, companyName, title, keywords, ogTitle });
};

export default function App() {
  const data = useLoaderData<typeof loader>();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 2000,
    });
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  const gtag = ` window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'G-N6XBKS122E');`;

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N6XBKS122E"
        ></script>
        <script
          async
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: gtag,
          }}
        />
      </head>
      <body>
        <Header
          domain={data.domain}
          logo={data.logo}
          companyName={data.companyName}
        />
        <Outlet context={data} />
        <Footer domain={data.domain} companyName={data.companyName} />
        <ScrollRestoration />
        {isVisible ? (
          <button
            style={{
              bottom: "14%",
              boxShadow: "none",
              outline: "none",
              minWidth: "unset",
            }}
            type="button"
            onClick={scrollToTop}
            className="z-10  py-2 px-4 flex justify-center items-center fixed right-4 h-10 w-10 bg-blue-500 hover:bg-blue-700 focus:ring-green-500 focus:ring-offset-green-200 text-white  transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.67 64">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M19.57.78.78,19.5a2.67,2.67,0,0,0,3.77,3.78L18.67,9.21V61.33a2.67,2.67,0,1,0,5.33,0V9L38.11,23.27a2.67,2.67,0,1,0,3.78-3.76L23.35.79a2.67,2.67,0,0,0-3.78,0Z"
                  />
                </g>
              </g>
            </svg>
          </button>
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}
