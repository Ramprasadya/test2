import Link from "next/link";

type PackageItem = {
  id: number;
  title: string;
  duration: string;
  image: string;
  destinations: string;
  price?: number;
};

const SimilarPackageCard = ({ pkg }: { pkg: PackageItem }) => {
  return (
    <div className="border-b pb-6 mb-6 last:border-b-0 last:mb-0">
      <h4 className="font-semibold text-sm text-gray-900">
        {pkg.title}
      </h4>
      <p className="text-xs text-gray-500 mb-3">
        {pkg.duration}
      </p>
        {/* Image */}
        <div className=" w-full h-full flex flex-col sm1:flex-row md:flex-col lg:flex-row gap-x-5  rounded ">
          <img
            src={pkg.image}
            alt={pkg.title}
            className=" object-cover w-28 h-20 bg-gray-200"
          />
          <div>
            <p className="text-xs text-gray-500">Destinations</p>
            <p className="text-sm font-medium text-gray-800">
              {pkg.destinations}
            </p>
          </div>
        </div>

        {/* Content */}
          <div className={` w-full mt-3 flex flex-col sm1:flex-row md:flex-col lg:flex-row  ${pkg.price ? "justify-between lg:items-center ":"justify-end"} `}>
            {pkg.price && (
              <div className="mt-2">
                <p className="text-xs text-gray-500 uppercase">
                  Starting from
                </p>
                <p className="font-semibold text-gray-900">
                  INR {pkg.price.toLocaleString()}
                </p>
              </div>
            )}
            <Link href={`/detail/${pkg.title}`} className="btn-primary text-sm px-4 py-2 rounded">
              View Details
            </Link>
          </div>
    </div>
  );
};

export default SimilarPackageCard
