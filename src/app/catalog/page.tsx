import { blurDataURL } from "@/assets/config";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from "next/image";
import Link from "next/link";

const FishCatalog = () => {
  const fishes = [
    {
      name: "Barramundi",
      slug: "barramundi",
      image: "/fishes/barramundi/barramundi_1.webp",
    },
    {
      name: "Grouper",
      slug: "grouper",
      image: "/fishes/grouper/grouper_1.webp",
    },
    {
      name: "Red Snapper",
      slug: "red_snapper",
      image: "/fishes/red_snapper/red_snapper_1.webp",
    },
    {
      name: "Red Spot Emperor",
      slug: "red_spot_emperor",
      image: "/fishes/red_spot_emperor/red_spot_emperor_1.webp",
    },
    {
      name: "Leather Jacket",
      slug: "leather_jacket",
      image: "/fishes/leather_jacket/leather_jacket_1.webp",
    },
    {
      name: "Goldband Snapper",
      slug: "goldband_snapper",
      image: "/fishes/goldband_snapper/goldband_snapper_1.webp",
    },
    {
      name: "Mahi Mahi",
      slug: "mahi_mahi",
      image: "/fishes/mahi_mahi/mahi_mahi_1.webp",
    },
    {
      name: "Parrotfish",
      slug: "parrotfish",
      image: "/fishes/parrotfish/parrotfish_1.webp",
    },
    {
      name: "Sillago/ Whiting",
      slug: "sillago_whiting",
      image: "/fishes/sillago_whiting/sillago_whiting_1.webp",
    },
    {
      name: "Red Mullet",
      slug: "red_mullet",
      image: "/fishes/red_mullet/red_mullet_1.webp",
    },
  ];

  return (
    <div className="text-white bg-gray-900">
      <div
        style={{
          backgroundImage: "url('/fish-farm.webp')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-20 md:py-40 lg:py-64 relative"
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto relative z-10 p-2 md:p-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-6 md:mt-0">
            Catalog
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl mb-8 sm:px-4">
            Welcome to our seafood catalog, where you can discover a world of
            exquisite flavors and premium quality. From the richness of
            Barramundi to the tender taste of Grouper, the vibrant colors of Red
            Snapper, and more, our selection offers an array of seafood
            delights. Browse through our range of sustainably sourced seafood
            options, each carefully curated to bring the ocean&apos;s treasures
            to your plate.
          </p>
        </div>
      </div>
      <div className="py-10 h-screen">
        {/* <LayoutGrid
          cards={fishes.map((fish, index) => ({
            className: index % 2 === 0 ? "col-span-1" : "col-span-1",
            thumbnail: fish.image
              ? fish.image
              : `https://source.unsplash.com/400x400/?${fish.name}`,
            url: `/catalog/${fish.slug}`,
            id: index,
            content: fish.name,
          }))}
        /> */}
        {/* create fishes catalogs with tailwinds css */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
          {fishes.map((fish) => (
            <Link key={fish.slug} href={`/catalog/${fish.slug}`}>
              <div className="w-full h-48 relative">
                <Image
                  src={
                    fish.image
                      ? fish.image
                      : `https://source.unsplash.com/400x400/?${fish.name}`
                  }
                  alt={fish.name}
                  className="w-full h-full object-cover rounded-t-lg"
                  width={400}
                  height={400}
                  blurDataURL={blurDataURL}
                  placeholder="blur"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black opacity-50 py-2 px-4 rounded-b-lg">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
                    {fish.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishCatalog;
