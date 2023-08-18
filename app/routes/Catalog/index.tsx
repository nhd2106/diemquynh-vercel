import { Link } from "@remix-run/react";

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
    // { name: "Red Snapper", slug: "red-snapper" },
    // { name: "Red Spot Emperor", slug: "red-spot-emperor" },
    // { name: "King Snapper", slug: "king-snapper" },
    // { name: "Goldband Snapper", slug: "goldband-snapper" },
    // { name: "Crimson Snapper", slug: "crimson-snapper" },
    // { name: "Mahi Mahi", slug: "mahi-mahi" },
    // { name: "Parrotfish", slug: "parrotfish" },
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
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Catalog
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl mb-8 sm:px-4">
            Welcome to our seafood catalog, where you can discover a world of
            exquisite flavors and premium quality. From the richness of
            Barramundi to the tender taste of Grouper, the vibrant colors of Red
            Snapper, and more, our selection offers an array of seafood
            delights. Browse through our range of sustainably sourced seafood
            options, each carefully curated to bring the ocean's treasures to
            your plate.
          </p>
        </div>
      </div>
      <div className="py-10">
        {/* create fishes catalogs with tailwinds css */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16">
          {fishes.map((fish) => (
            <Link key={fish.slug} to={`/catalog/${fish.slug}`}>
              <div className="w-full h-48 relative">
                <img
                  src={
                    fish.image
                      ? fish.image
                      : `https://source.unsplash.com/400x400/?${fish.name}`
                  }
                  alt={fish.name}
                  className="w-full h-full object-cover rounded-t-lg"
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
