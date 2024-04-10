"use client";

import { blurDataURL } from "@/assets/config";
import { fishes } from "@/assets/fish";
import Image from "next/image";
import { useState } from "react";

const CatalogImages = ({ id }: { id: string }) => {
  const fish = fishes?.[id as string];
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleImageClick = (url: string) => {
    setFullScreenImage(url);
  };

  const handleCloseFullScreenImage = () => {
    setFullScreenImage("");
  };

  return (
    <>
      <div className="py-10">
        <div className="px-5 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {(fish?.images ?? []).map((image, index) => (
              <div
                key={index}
                className={`w-full 
                } relative rounded-lg overflow-hidden shadow-md`}
              >
                <div className="h-full flex flex-col justify-between">
                  <Image
                    src={image.url}
                    alt={image?.title ?? ""}
                    className={`w-full h-full ${
                      image.orientation === "horizontal" ? "object-center" : ""
                    }`}
                    style={{
                      objectFit: "cover",
                    }}
                    onClick={() => handleImageClick(image.url)}
                    width={500}
                    height={500}
                    blurDataURL={blurDataURL}
                    placeholder="blur"
                  />
                  <div className="bg-white text-black p-4">
                    <h3 className="text-lg font-medium">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {fullScreenImage && (
        <div
          className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
          onClick={handleCloseFullScreenImage}
        >
          <div
            className="bg-white rounded-lg p-4 shadow-md"
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
            }}
          >
            <Image
              src={fullScreenImage}
              alt="Full screen"
              className="max-h-full max-w-full transition-all duration-2000 ease-in-out"
              style={{
                maxHeight: "calc(90vh - 2rem)",
                maxWidth: "calc(90vw - 2rem)",
              }}
              width={500}
              height={500}
              blurDataURL={blurDataURL}
              placeholder="blur"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogImages;
