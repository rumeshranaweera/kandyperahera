import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className="relative h-full">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: false }}
        spaceBetween={30}
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
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <SwiperSlide>
            <Image
              src={`/imgs/img-${i}.jpg`}
              alt={`${"img" + i}`}
              fill
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
