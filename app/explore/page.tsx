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
import { motion, useScroll, useTransform } from "framer-motion";
import { Metadata } from "next";

const imageList = [
  "/explore/test.webp",
  "/explore/test.webp",
  "/explore/test.webp",
  "/explore/train.jpg",
];

export const metadata: Metadata = {
  title: "Explore",
  description: "Events In Kandy - Buy your Tickets",
};

const places = [
  // {
  //   title: "Soul Food Vegetarian Kitchen",
  //   image:
  //     "https://media-cdn.tripadvisor.com/media/photo-m/1280/28/0f/19/2c/soul-food.jpg",
  //   desc: " Soul Food is a vegetarian restuarant with vegan options that located in Kandy. They serves Srilankan ,and fusion food.",
  //   category: "food",
  // },
  {
    title: "Temple of the Tooth Relic ",
    image:
      "https://cdn.pixabay.com/photo/2019/04/25/15/16/sri-lanka-4155138_1280.jpg",
    desc: " The Temple of The Sacred Tooth Relic is situated in the former Kingdom of Kandy. Temple of the Tooth is a Buddhist Temple that houses the sacred relic of the tooth of the Buddha. The sacred relic was brought to Sri Lanka in the 3rd century BC and since has been closely associated with the royalty of the island nation with magnificent temples built to enshrine it in every kingdom.  Temple of the Tooth is also famous for its magnificent architecture. There are so many ancient wood carvings, paintings, and buildings belonging to the ancient Kandy Kingdom. Temple of Tooth is a great place a religious and historical destination to visit in Kandy.",
    category: "*Travel",
    map: "https://maps.app.goo.gl/uJ2h4wcLUAxks1C39",
    address: "Kandy",
    rating: 4.9,
  },

  {
    title: "Royal Botanical Garden. ",
    image:
      "https://cdn.pixabay.com/photo/2020/12/31/13/57/peradeniya-botanical-garden-5876612_1280.jpg",
    desc: " Royal Botanical Garden is situated in Peradeniya, Kandy. It is the biggest botanical garden in Srilanka with 60 – hectares of land. There are some 4,000 different species of plants at Peradeniya Gardens. More than 4000 species of plants including woody trees, Palms, Ferns, Orchids, and shrubs are present within the gardens. Peradeniya’s botanical garden is a perfect place for tourists in Kandy.",
    category: "travel",
    map: "https://maps.app.goo.gl/bz7b9R4KuC27sMF47",
    address: "Peradeniya Botanical Garden",
    rating: 4.6,
  },

  {
    title: "Kandy Viewpoint.",
    image:
      "https://images.unsplash.com/photo-1661928684586-eab4463502be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    desc: "Kandy Viewpoint is also known as “Arthur’s Seat”. The place is a nice viewpoint of Kandy city, especially the Lake. You can take the whole view of the Kandy city from here. ",
    category: "travel",
    map: "https://maps.app.goo.gl/JBF75BbKGoA6bCFK7",
    address: "S.W.R.D.Bandaranayake Mawatha, Kandy",
    rating: 4.6,
  },

  {
    title: "World Buddhist Museum. ",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPv7boXjRjFWJN3N1xJhHk_w7NgFjF1QRcwwi7g=s680-w680-h510",
    desc: "World Buddhist Museum is the world’s first international Buddhist Museum. It is located next to the National Museum of Kandy and the Temple of the Tooth in Kandy, Sri Lanka. Museum showcasing exhibits devoted to Buddhist history around the world in a Victorian-era space. Also, the museum showcases the expansion of Buddhism throughout the Asia and rest of the world. This is the only museum that demonstrates the expansion of Buddhism all around the world. ",
    category: "travel",
    map: "https://maps.app.goo.gl/VCKUZjd8uxPMGGp18",
    address: "Old Courts Building, Hemamali Mawatha, Kandy",
    rating: 4.1,
  },

  {
    title: "Udawaththakale",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lianas%2C_Udawattakele.jpg/800px-Lianas%2C_Udawattakele.jpg",
    desc: "Udawaththakale forest reserve is a historical forest reserve located on a hill – ridge in the city of Kandy. Udawaththa kale is also known as “ The Garden above the royal palace.” It has a large variety of plant species such as lianas, shrubs, and small trees. There are different kinds of mammals as well in here varying from small to medium size including snakes and other reptiles. This place was first designed as a forest reserve in 1856, and it became a sanctuary in 1938.",
    category: "travel",
    map: "https://maps.app.goo.gl/Pos1DaCzafATsx8x7",
    address: "Forest Department Office, Sangamitta Mawatha, Kandy 20000",
    rating: 4.3,
  },

  {
    title: "Big Buddha Statue.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Sri_Maha_Bodhi_Vihara_Statue.jpg/600px-Sri_Maha_Bodhi_Vihara_Statue.jpg",
    desc: "Big Buddha Statue is situated in Bahirawakanda Temple. The buddha statue can be seen from almost everywhere in Kandy. It stands at 26.83 m (88.0 ft) high and is one of the tallest Buddha statues in Sri Lanka.",
    category: "travel",
    map: "https://maps.app.goo.gl/Pos1DaCzafATsx8x7",
    address: "Bahirawa Kanda Rd, Kandy",
    rating: 4.8,
  },
  {
    title: "National Museum of Kandy.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kandy_National_Museum.jpg/250px-Kandy_National_Museum.jpg",
    desc: "The national museum of Kandy is located next to the temple of Tooth in part of the former Royal of Kandy. Visitors can enjoys rich culture and traditions of the Kandyan Kingdom. There are over 5000 museum objects which are depicting various aspects historical and cultural events of the Kandyan period.",
    map: "https://maps.app.goo.gl/MFVY3xbRk6q99tA5A",
    category: "travel",
    address: "kandy",
    rating: 4.6,
  },

  {
    title: "Garrison Cemetery.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/British_Garrison_Cemetery.jpg/800px-British_Garrison_Cemetery.jpg",
    desc: "Garrison Cemetery is a British Cemetery located in Kandy. This cemetery was the designated final resting place of many British and European greats from Sri Lanka's colonial era. Here you will find examples of table tombs, raised tombs with inscribed side tablets, obelisks, a fluted column and many more of the mundane and uncommon foot stones. Some of famous graves among 195 graves are, John Spottiswood Robertson, Lieut. General John Fraser and Sir John DOyly. ",
    map: "https://maps.app.goo.gl/adWeVHjnJiUUrhce8",
    category: "travel",
    address: "kandy",
    rating: 4.4,
  },

  {
    title: "Kandy War Cemetery.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kandy_War_Cemetery.JPG/260px-Kandy_War_Cemetery.JPG",
    desc: "The Kandy War Cemetery, also known as Commonwealth cemetery is a British military cemetery in Kandy.  The Kandy War Cemetery was established for soldiers of the British Empire who were died during World War II as well as a soldier who died during World War I. The cemetery is beautifully kept and has over 190 tombs. ",
    map: "https://maps.app.goo.gl/Hy2hh1FpRzddrJH5A",
    category: "travel",
    address: "kandy",
    rating: 4.3,
  },
];

const Explore = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  return (
    <>
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

      <PageDiv className="relative z-30 pt-1 -mt-20 bg-slate-900/50 backdrop-blur-sm rounded-t-xl">
        <SectionTitle title="Explore" />

        {/* main p */}

        <p>
          Kandy is the cultural capital of Srilanka and home to the Temple of
          The Sacred Tooth Relic. For Sinhala people, this is the holiest place
          on the island. But for the tourists, Kandy offers more than religious
          satisfaction. There are pleasing old quarters, a central lake, a
          clutch of museums, and surrounding vicinity, some botanical gardens.
          Kandy is a fascinating place to visit.
        </p>
        {/* palces */}
        <div>
          <h2 className="max-w-sm my-5 text-4xl tracking-wider text-left">
            Food
          </h2>
          <div className="space-y-2 columns-1 sm:columns-2">
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
