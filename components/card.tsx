import Image from "next/image";

const Card = () => {
  return (
    <div className="relative w-full max-w-sm m-1 mx-auto border-2 border-yellow-400 rounded-lg">
      <a
        href="#"
        className="relative inline-block w-full transition-transform duration-300 ease-in-out transform"
      >
        <div className="rounded-lg">
          <div className="relative flex justify-center overflow-hidden rounded-lg h-60">
            <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
              <Image src="/seat-0.webp" fill loading="lazy" alt="" />
            </div>
            {/* <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg select-none">
              {" "}
              Featured{" "}
            </span> */}
          </div>
          <div className="">
            <div className="flex mx-2 mt-4 ">
              <div className="flex items-center grow">
                <div className="relative w-full text-left">
                  <h4 className="text-2xl font-medium text-white line-clamp-1 md:text-3xl">
                    Soul food balcony
                  </h4>
                  <p className="mt-2 text-sm text-white line-clamp-1">
                    soul food,kandy
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="inline-block px-4 py-2 font-semibold leading-tight text-yellow-400 text-primary whitespace-nowrap rounded-xl bg-yellow-400/10">
                  <span className="text-lg uppercase"> $ </span>
                  <span className="text-lg">100</span>
                </p>
              </div>
            </div>
            <div className="pt-3 mt-2 border-t border-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              laboriosam labore obcaecati hic fugit exercitationem ad blanditiis
              inventore excepturi cumque!
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
