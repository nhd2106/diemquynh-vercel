import { fishes } from "@/assets/fish";
import CatalogImages from "@/components/modules/catalogImages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const FishDetails = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;

  const fish = fishes?.[id as string];

  return (
    <div className="text-white bg-gray-900">
      <div
        className="fish-details-header py-20 md:py-40 lg:py-64 relative"
        style={{
          backgroundImage: `url(${fish?.images?.[0].url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black opacity-50 absolute top-0 left-0 h-full w-full"></div>
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto relative z-10 p-2 md:p-0">
          <Breadcrumb className="mt-6">
            <BreadcrumbList>
              <BreadcrumbItem className="text-white">
                <Link href="/catalog">Catalog</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-white">
                {fish?.name}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-6 md:mt-0">
            {fish?.name}
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl mb-8 sm:px-4">
            {fish?.description}
          </p>
        </div>
      </div>
      <CatalogImages id={id} key={id} />
    </div>
  );
};

export default FishDetails;
