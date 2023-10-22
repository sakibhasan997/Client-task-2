import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <>
      {/* Top Slider Section Start */}
      <Swiper
        className="w-full h-16 text-center mx-auto bg-[#f5f5f5]"
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg">New Styles Added: 20% Off Select Styles </h3>
          <a className="underline text-sm" href="/">Sign in and use code MEMBER20 at checkout.</a>
        </SwiperSlide>
        <SwiperSlide  className="text-black font-normal py-1">
          <h3 className="text-lg">New Arrivals 🍂</h3>
          <a className="underline text-sm" href="/">Shop All</a>
        </SwiperSlide>
        <SwiperSlide  className="text-black font-normal py-1">
          <h3 className="text-lg">Why Wait? Try Store Pickup</h3>
          <p className="text-sm">
            Buy online and find a store near you for pick up in less than 2
            hours. <a className="underline" href="/" >Shop now.</a>
          </p>
        </SwiperSlide>
        <SwiperSlide  className="text-black font-normal py-1">
          <h3 className="text-lg">Members: Free Shipping on Orders $50+</h3>
          <a className="underline text-sm" href="/">Join Now</a>
        </SwiperSlide>
      </Swiper>
      {/* Top Slider Section End */}

      <div></div>
    </>
  );
};

export default Home;
