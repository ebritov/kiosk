import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardGame from "../../components/CardGame";


const AllGamesPerCategory = (props) => {
  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1266: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1536: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {props.games?.map((game, index) => (
        <SwiperSlide key={index}>
          {game && <CardGame game={game} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default AllGamesPerCategory;
