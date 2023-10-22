import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
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
            styles. Exclusions apply.
          </p>
          <button className="my-btn">Shop Now</button>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Bottom Banner Section start */}
      <div className="flex w-full h-[550px] my-[48px]">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1583,c_limit/40c699e6-8605-493f-bece-0842c207b526/nike-just-do-it.png"
          alt=""
        />
      </div>
      {/* Bottom Banner Section End */}

      {/* Trending Item Section Start */}
      <div className="trending-main-section">
        <div className="trending-title text-center mb-6">
          <h2
            className="font-extrabold font-sans text-black pb-4 text-7xl"
            style={{ letterSpacing: "-3px" }}>
            NEW ARRIVALS
          </h2>
          <p className="font-sans font-medium text-lg my-6">
            Featuring the Air Force 1 Pro Tech.
          </p>
          <button className="my-btn">Shop</button>
        </div>

        {/* Trending Slider Section Start */}
        <div className="trending-item-slider">
          <h4 className="ml-[45px] font-sans font-medium text-2xl">Trending</h4>
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper  my-5 ml-12 my-swiper">
            <SwiperSlide
              className="w-[495px] ml-12"
              style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/32c7aa15-af97-44f2-a295-1dbb4d2322a5/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black my-3">
                Just in: Nike Vomero 17
              </h4>
            </SwiperSlide>
            <SwiperSlide style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/16ed6ee9-d799-48fc-a384-4e461d2f9518/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black my-3">
                Nike Leggings
              </h4>
            </SwiperSlide>
            <SwiperSlide style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/373cde19-b2b7-4e83-b386-c75bfc84a7f9/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black my-3">
                Air Jordan 1 Mid SE Craft
              </h4>
            </SwiperSlide>
            <SwiperSlide style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/c438a667-9eb0-48e7-8954-d86eda5c8a35/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black my-3">
                HBCU Varsity Collection
              </h4>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Trending Slider Section End */}
      </div>
      {/* Trending Item Section End */}

      {/* Featured Section Start */}
      <div className="featured-section max-w-[1824px] ">
        <div className="featured-title mt-14 mb-6">
            <h4 className="ml-[45px] font-sans font-medium text-2xl">Featured</h4>
        </div>
        <div className="featured-body flex justify-center mb-8 gap-5 mx-auto">
          <div className="ft-first-img relative">
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_738,c_limit/b5225881-df20-4bd6-a3dc-bb8504d04b75/nike-just-do-it.jpg" alt="" />
            <div className="absolute bottom-14 left-14">
              <p className="font-sans font-bold text-lg text-gray-800">By You, for Them</p>
              <h3 className="font-sans font-semibold text-2xl text-gray-800 pb-5">The Best Custom Gifts</h3>
              <button className="my-btn">Shop All Gifts</button>
            </div>
          </div>
          <div className="ft-second-img relative">
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_738,c_limit/f8728d44-9360-4bdd-b1b5-a3a57f108f34/nike-just-do-it.jpg" alt="" />
            <div className="absolute bottom-14 left-14">
              <p className="font-sans font-bold text-lg text-gray-50">Jordan Essentials</p>
              <h3 className="font-sans font-semibold text-2xl text-gray-50 pb-5">Defy Expectations in <br /> Jordan's Latest </h3>
              <button className="my-btn-white bg-slate-100">Shop</button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Section End */}
    </>
  );
};

export default Home;
