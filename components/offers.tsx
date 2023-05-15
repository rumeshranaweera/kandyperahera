const Offers = () => {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
          <h2 className="my-2 mb-4 text-4xl font-medium text-center capitalize sm:text-3xl title-font">
            What we offer
          </h2>
          <p className="mx-auto text-base leading-relaxed paragraph xl:w-2/4 lg:w-3/4">
            Secure your spot and enjoy the best views of the Kandy Perahera with
            our reserved seating, ensuring a memorable and hassle-free
            experience.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          {/* offer goes here */}
          <Offer title="Receive a complimentary souvenir package, including a Kandy Perahera program booklet, traditional Kandyan masks, and other memorabilia" />
          <Offer title="Reserved seating in a prime location to enjoy the Perahera" />
          <Offer title="Special souvenirs and gifts to remember the occasion" />
          <Offer title="optimal photography opportunities during the Kandy Perahera" />
        </div>
        <button className="mx-auto primary-btn">Reserve my seat</button>
      </div>
    </section>
  );
};

const Offer = ({ title }: { title: string }) => {
  return (
    <div className="w-full p-2 sm:w-1/2">
      <div className="flex items-center h-full p-4 bg-yellow-500 rounded">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          className="flex-shrink-0 w-6 h-6 mr-4 text-black"
          viewBox="0 0 24 24"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
        <span className="font-medium text-black capitalize title-font">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Offers;
