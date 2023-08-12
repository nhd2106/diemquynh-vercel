function Catalog() {
  return (
    <div className="text-white">
      <div
        style={{
          backgroundImage: "url('/fish-farm.webp')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="py-64"
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="w-1/3 flex ml-20 relative z-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">Catalog</h1>
            <p>
              Welcome to our seafood catalog, where you can discover a world of
              exquisite flavors and premium quality. From the richness of
              Barramundi to the tender taste of Grouper, the vibrant colors of
              Red Snapper, and more, our selection offers an array of seafood
              delights. Browse through our range of sustainably sourced seafood
              options, each carefully curated to bring the ocean's treasures to
              your plate. Whether you're a culinary professional or a seafood
              enthusiast, our catalog is your gateway to an exceptional dining
              experience. Indulge in the finest seafood exports and elevate your
              meals with the freshest catches from the sea. Explore our catalog
              today and let your taste buds embark on a flavorful journey like
              no other.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Catalog;
