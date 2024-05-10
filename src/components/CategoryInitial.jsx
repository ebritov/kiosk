/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
//Autoplay
import "swiper/css";
import CardGame from "./CardGame";
//import { useState } from "react";
import SkeletonCardGame from "./SkeletonCardGame";

//import '../stylesSwiper.css';

const CategoryInitial = (props) => {
  //const [nGames] = useState((props.games?.length ?? 0) >= 6 ? true : false);
  return (
    <Swiper
      //className="mySwiper"
      loop={true}
      //slidesPerView={6}
      centeredSlides={(props.games?.length ?? 0) >= 5 ? true : false}
      centeredSlidesBounds={(props.games?.length ?? 0) >= 5 ? true : false}
      //navigation={false}
      //pagination={false}
      spaceBetween={30}
      slideToClickedSlide={true}

      //direction="horizontal"
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1266: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1536: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
      autoplay={{
        delay: 2000,
        waitForTransition: 5000,
        disableOnInteraction: false,
      }}
      //, Autoplay
      modules={[Autoplay]}
    >
      {/**props.games */}

      {
        props.games ? props.games?.map((game, index) => (
          <SwiperSlide key={index}>
            {game && <CardGame game={game} />}
          </SwiperSlide>
        ))
          :
          Array(6).fill(null).map((a, i) => (
            <SwiperSlide key={i}>
              <SkeletonCardGame />
            </SwiperSlide>
          ))
      }


    </Swiper>
  );
};
export default CategoryInitial;
