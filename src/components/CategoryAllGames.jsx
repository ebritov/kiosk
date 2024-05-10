/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination, Navigation } from 'swiper/modules';
//Autoplay
import "swiper/css";
//import "swiper/css/navigation";
//import '../stylesSwiper.css';
import CardGame from "./CardGame";
import SkeletonCardGame from "./SkeletonCardGame";

const CategoryAllGames = (props) => {
  return (
    <Swiper
      //className="mySwiper"
      //slidesPerView={6}
      //centeredSlides={true}

      //navigation={true}
      //pagination={true}
      loop={true}
      //loopAddBlankSlides={true}
      //loopAdditionalSlides={50}
      //rewind={true}
      //loopPreventsSliding={50}
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
      centeredSlides={true}
      centeredSlidesBounds={true}
      // paginationClickable={true}
      // loop={true}
      spaceBetween={30}
      slideToClickedSlide={true}
      modules={[]}
    >
      {/*
        props.games?.map((game, index) => (
          <SwiperSlide key={index}>
            {game && <CardGame game={game} />}
          </SwiperSlide>
        ))*/
      }
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
    </Swiper >
  );
};
export default CategoryAllGames;
