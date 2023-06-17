"use client";
import PageDiv from "@/components/pageDiv";
import SectionTitle from "@/components/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import ExplorCard from "@/components/explorCard";

const imageList = [
  "/explore/test.webp",
  "/explore/test.webp",
  "/explore/test.webp",
  "/explore/train.jpg",
];
const places = [
  {
    title: "Soul Food Vegetarian Kitchen",
    desc: " Soul Food is a vegetarian restuarant with vegan options that located in Kandy. They serves Srilankan ,and fusion food.",
    category: "food",
    address: "48 Sri Wickrama Rajasinghe Mawatha, Kandy 20000",
  },
];
const Explore = () => {
  return (
    <>
      <div className="relative h-96 ">
        <div className="absolute inset-0 z-10 pointer-events-none select-none bg-gradient-to-t from-slate-900 from-[-20%] via-transparent " />
        <Swiper
          fadeEffect={{ crossFade: false }}
          speed={700}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          loop
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {imageList
            .map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={`/explore/img${i}.jpg`}
                  alt={`${"img" + i}`}
                  fill
                  sizes="1024"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={`/imgs/img-${i}.jpg`}
                  className="object-cover"
                />
              </SwiperSlide>
            ))
            .sort(() => 0.5 - Math.random())}
          )
        </Swiper>
      </div>

      <PageDiv className="relative z-30 pt-1 -mt-20 bg-slate-900/50 backdrop-blur-sm rounded-t-xl">
        <SectionTitle title="Explore" />

        {/* main p */}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          quidem ipsa repudiandae, accusamus dolorum officiis deleniti hic et
          ipsam dicta magni quos aliquam quasi soluta inventore obcaecati quis
          eaque quia? Nisi reprehenderit perspiciatis facere doloremque, sed
          ipsum ratione vero temporibus est nostrum.{" "}
        </p>
        {/* palces */}
        <div>
          <h2 className="max-w-sm my-5 text-4xl tracking-wider text-left">
            Food
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {places.map((palce, i) => (
              <ExplorCard key={i} {...palce} />
            ))}
          </div>
        </div>
      </PageDiv>
    </>
  );
};

export default Explore;
