import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "./Home.css";
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
          <h3 className="text-lg font-sans font-medium">
            New Styles Added: 20% Off Select Styles{" "}
          </h3>
          <a className="underline text-sm font-medium" href="/">
            Sign in and use code MEMBER20 at checkout.
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg font-sans font-medium">New Arrivals 🍂</h3>
          <a className="underline text-sm font-medium" href="/">
            Shop All
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg font-sans font-medium">
            Why Wait? Try Store Pickup
          </h3>
          <p className="text-sm font-medium">
            Buy online and find a store near you for pick up in less than 2
            hours.{" "}
            <a className="underline" href="/">
              Shop now.
            </a>
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg font-sans font-medium">
            Members: Free Shipping on Orders $50+
          </h3>
          <a className="underline text-sm font-medium" href="/">
            Join Now
          </a>
        </SwiperSlide>
      </Swiper>
      {/* Top Slider Section End */}

      {/* Banner Section Start */}
      <div className="main-banner-section flex items-center pl-[36px]">
        <div>
          <h4 className="text-black font-medium text-xl font-sans">
            NEW STYLES ADDED
          </h4>
          <h2 className="font-extrabold font-sans text-black pb-4 text-7xl">
            20% OF SELECT STYLES
          </h2>
          <p className="font-medium text-black font-sans pb-5">
            Members: Sign in and use code MEMBER20 to save 20% off <br /> select
            styles. Exclusions apply.{" "}
          </p>
          <button className="my-btn">Shop Now</button>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Bottom Banner Section start */}
      <div></div>
      {/* Bottom Banner Section End */}
    </>
  );
};

export default Home;
