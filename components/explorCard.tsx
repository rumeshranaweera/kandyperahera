import Image from "next/image";
import { HiMap, HiStar } from "react-icons/hi";

const ExplorCard = ({
  title,
  image,
  desc,
  category,
  map,
  address,
  rating,
}: {
  title: string;
  image: string;
  desc: string;
  category: string;
  map: string;
  address: string;
  rating: number;
}) => {
  return (
    <>
      {/* component */}
      <div className="relative w-full max-w-sm p-1 mx-auto text-left border rounded-lg overflow-clip bg-yellow-400/5 h-fit border-yellow-400/10">
        <div className="relative inline-block w-full transition-transform duration-300 ease-in-out transform">
          <div className="rounded-lg">
            <div className="relative flex justify-center overflow-hidden rounded-lg h-60">
              <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                <Image
                  src={image}
                  alt={title}
                  fill
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={image}
                  className="object-cover"
                />
              </div>

              <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-bold text-black bg-yellow-500 rounded-lg select-none">
                <HiStar size={20} className="inline-block" />
                <span className="sr-only">ratings</span>
                {rating}
                <span className="mx-0.5 ">/</span>5
              </span>
            </div>
            <div>
              <div className="mt-4 ">
                <div className="flex items-center">
                  <div className="relative">
                    <h2 className="text-xl italic font-medium md:text-2xl">
                      {title}
                    </h2>
                    {/* <p className="mt-2 text-sm ">{address}</p> */}
                  </div>
                </div>
              </div>
              <div className="pt-3 mt-2 text-lg font-semibold text-center border-t border-yellow-400/50">
                {desc}
              </div>
              <div className="pt-3 pb-3 mt-2 ">
                <a
                  href={map}
                  target="_blank"
                  className="flex items-center xl:flex-row xl:items-center text-start"
                >
                  <span>
                    <HiMap size={30} className="text-yellow-400" />
                  </span>
                  <span className="underline xl:mt-0"> {address} </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorCard;
