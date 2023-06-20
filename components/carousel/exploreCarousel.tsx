"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/components/styles.css";
const imageList = [
  "/explore/test.webp",
  "/explore/test.webp",
  "/explore/test.webp",
  "/explore/train.jpg",
];
const ExploreCarousel = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  return (
    <motion.div className="relative h-96 " style={{ y }}>
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
    </motion.div>
  );
};

export default ExploreCarousel;
