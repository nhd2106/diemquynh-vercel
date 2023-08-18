import { useParams } from "react-router-dom";

interface Fish {
  name: string;
  description: string;
  images: { url: string; orientation: "horizontal" | "vertical" }[];
}

interface Fishes {
  [key: string]: Fish;
}

const FishDetails = () => {
  const { id } = useParams<{ id: string }>();
  const fishes: Fishes = {
    barramundi: {
      name: "Barramundi",
      description:
        "Barramundi is a versatile fish that can be grilled, baked, or fried. It has a mild, buttery flavor and a firm, flaky texture.",
      images: [
        {
          url: "/fishes/barramundi/barramundi_1.webp",
          orientation: "horizontal",
        },
        {
          url: "/fishes/barramundi/barramundi_1.webp",
          orientation: "horizontal",
        },
        {
          url: "/fishes/barramundi/barramundi_3.webp",
          orientation: "horizontal",
        },

        {
          url: "/fishes/barramundi/barramundi_2.webp",
          orientation: "vertical",
        },
        {
          url: "/fishes/barramundi/barramundi_4.webp",
          orientation: "vertical",
        },
        {
          url: "/fishes/barramundi/barramundi_5.webp",
          orientation: "vertical",
        },
      ],
    },
  };

  const fish = fishes?.[id as string];

  return (
    <div className="text-white bg-gray-900">
      <div
        style={{
          backgroundImage: `url(${fish?.images?.[0].url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-20 md:py-40 lg:py-64 relative"
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {fish?.name}
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl mb-8 sm:px-4">
            {fish?.description}
          </p>
        </div>
      </div>
      <div className="py-10">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {(fish?.images ?? []).map((image, index) => (
              <div
                key={index}
                className={`w-full ${
                  image.orientation === "horizontal" ? "h-48" : "h-96"
                } relative rounded-lg overflow-hidden shadow-md`}
              >
                <img
                  src={image.url}
                  alt={fish?.name}
                  className={`w-full h-full ${
                    image.orientation === "horizontal" ? "object-center" : ""
                  }`}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishDetails;
