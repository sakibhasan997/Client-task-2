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
import Shoes from "../../Component/Shoes";

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
          <h3 className=" md:text-lg font-sans font-medium ">
            New Styles Added: 20% Off Select Styles{" "}
          </h3>
          <a className="underline text-xs md:text-sm font-medium" href="/">
            Sign in and use code MEMBER20 at checkout.
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg font-sans font-medium">New Arrivals 🍂</h3>
          <a className="underline text-xs md:text-sm font-medium" href="/">
            Shop All
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg font-sans font-medium">
            Why Wait? Try Store Pickup
          </h3>
          <p className="text-xs md:text-sm font-medium">
            Buy online, find a nearby store for 2-hour pickup.
            <a className="underline" href="/">
              Shop now.
            </a>
          </p>
        </SwiperSlide>
        <SwiperSlide className="text-black font-normal py-1">
          <h3 className="text-lg font-sans font-medium">
            Members: Free Shipping on Orders $50+
          </h3>
          <a className="underline text-xs md:text-sm font-medium" href="/">
            Join Now
          </a>
        </SwiperSlide>
      </Swiper>
      {/* Top Slider Section End */}

      {/* Banner Section Start */}
      <div className="main-banner-section max-w-[1920px] relative">
        <img
          className="w-full hidden md:block"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1583,c_limit/8eb285a9-ccad-4840-af51-fce7432e89eb/nike-just-do-it.jpg"
          alt=""
        />
        <img
          className="max-w-[339px]  mx-auto block md:hidden"
          src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_342,c_limit/d63706b8-96a6-4213-a882-5feb1cbbd790/nike-just-do-it.jpg"
          alt=""
        />
        <div className="absolute left-8 bottom-5 md:bottom-10">
          <h4 className="text-black font-medium text-lg md:text-xl font-sans hidden md:block">
            NEW STYLES ADDED
          </h4>
          <h2 className="md:font-extrabold font-sans text-black md:pb-4 text-2xl md:text-7xl hidden md:block">
            20% OF SELECT STYLES
          </h2>
          <p className="font-medium text-black font-sans md:pb-5 hidden md:block">
            Members: Sign in and use code MEMBER20 to save 20% off <br /> select
            styles. Exclusions apply.
          </p>
          <button className="my-btn md:my-btn hidden md:block">Shop Now</button>
        </div>
      </div>
      {/* Banner Section End */}

      {/* Bottom Banner Section start */}
      <div className="max-w-[1920px] h-[550px] mt-[50px] md:my-[48px]">
        <img
          className="w-full hidden md:block"
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1583,c_limit/40c699e6-8605-493f-bece-0842c207b526/nike-just-do-it.png"
          alt=""
        />
        <img
          className="max-w-[339px]  mx-auto block md:hidden"
          src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_342,c_limit/c7eb68e0-8d89-4577-a5bd-93afc717eed0/nike-just-do-it.png"
          alt=""
        />
      </div>
      {/* Bottom Banner Section End */}

      {/* Trending Item Section Start */}
      <div className="trending-main-section mx-5 md:ml-12">
        <div className="trending-title text-center mb-6">
          <h2
            className="font-extrabold font-sans text-black md:pb-4 text-3xl md:text-7xl"
            style={{ letterSpacing: "-3px" }}>
            NEW ARRIVALS
          </h2>
          <p className="font-sans font-medium text-lg my-2 md:my-6">
            Featuring the Air Force 1 Pro Tech.
          </p>
          <button className="my-btn">Shop</button>
        </div>

        {/* Trending Slider Section Start */}
        <div className="trending-item-slider">
          <h4 className="ml-2 md:ml-[45px] font-sans font-medium text-2xl">
            Trending
          </h4>
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper my-5 ml-2 my-swiper cursor-pointer">
            <SwiperSlide
              className="w-full md:w-[33.33%] md:ml-4"
              style={{ width: "100%", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/32c7aa15-af97-44f2-a295-1dbb4d2322a5/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-lg md:text-xl text-black my-3">
                Just in: Nike Vomero 17
              </h4>
            </SwiperSlide>
            <SwiperSlide
              className="w-full md:w-[33.33%] md:ml-4"
              style={{ width: "100%", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/16ed6ee9-d799-48fc-a384-4e461d2f9518/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-lg md:text-xl text-black my-3">
                Nike Leggings
              </h4>
            </SwiperSlide>
            <SwiperSlide
              className="w-full md:w-[33.33%] md:ml-4"
              style={{ width: "100%", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/373cde19-b2b7-4e83-b386-c75bfc84a7f9/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-lg md:text-xl text-black my-3">
                Air Jordan 1 Mid SE Craft
              </h4>
            </SwiperSlide>
            <SwiperSlide
              className="w-full md:w-[33.33%] md:ml-4"
              style={{ width: "100%", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/c438a667-9eb0-48e7-8954-d86eda5c8a35/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-lg md:text-xl text-black my-3">
                HBCU Varsity Collection
              </h4>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Trending Slider Section End */}
      </div>

      {/* Trending Item Section End */}

      {/* Featured Section Start */}
      <div className="featured-section max-w-[1824px] mx-5 md:mx-0">
        <div className="featured-title mt-14 mb-6">
          <h4 className="ml-[45px] font-sans font-medium text-2xl">Featured</h4>
        </div>
        <div className="featured-body flex flex-col md:flex-row justify-center mb-8 gap-5 mx-auto">
          <div className="ft-first-img relative">
            <img
              className="hidden md:block"
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_738,c_limit/b5225881-df20-4bd6-a3dc-bb8504d04b75/nike-just-do-it.jpg"
              alt=""
            />
            <img
              className="block md:hidden"
              src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_342,c_limit/4780c93f-acfd-4f16-a677-68ecf0b72e9d/nike-just-do-it.jpg"
              alt=""
            />
            <div className="absolute bottom-14 left-14">
              <p className="font-sans font-bold text-lg text-gray-800">
                By You, for Them
              </p>
              <h3 className="font-sans font-semibold text-2xl text-gray-800 pb-5">
                The Best Custom Gifts
              </h3>
              <button className="my-btn">Shop All Gifts</button>
            </div>
          </div>
          <div className="ft-second-img relative">
            <img
              className="hidden md:block"
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_738,c_limit/f8728d44-9360-4bdd-b1b5-a3a57f108f34/nike-just-do-it.jpg"
              alt=""
            />
            <img
              className="block md:hidden"
              src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_342,c_limit/1ec7251c-7362-4733-8592-f535d3018b08/nike-just-do-it.jpg"
              alt=""
            />
            <div className="absolute bottom-14 left-14">
              <p className="font-sans font-bold text-lg text-gray-50">
                Jordan Essentials
              </p>
              <h3 className="font-sans font-semibold text-2xl text-gray-50 pb-5">
                Defy Expectations in <br /> Jordan's Latest{" "}
              </h3>
              <button className="my-btn-white bg-slate-100">Shop</button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Section End */}

      {/* Shoes section Start */}
      <Shoes />
      {/* Shoes section End */}

      {/* Sport section Start  */}
      <div className="Sport-item-slider mx-5 md:ml-12">
        <h4 className="md:ml-[45px] font-sans font-medium text-2xl mt-5 mb-5">
          Shop by Sport
        </h4>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          className="mySwiper ml-12 my-swiper cursor-pointer">
          <SwiperSlide>
            <div
              className="w-[495px]"
              style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/2ca86963-0803-41f2-9507-73304bf1be08/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black mt-3">
                Nike Basketball
              </h4>
              <h5 className="font-sans font-medium text-lg text-black mb-3">
                Styles made for your game.
              </h5>
              <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
                Shop
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/716abe4c-b11b-418b-b7e1-32453791bd83/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black mt-3">
                Nike Running
              </h4>
              <h5 className="font-sans font-medium text-lg text-black mb-3">
                Everything you'll need for every mile.
              </h5>
              <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
                Shop
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/1b4c256d-8d4e-4914-8352-1a58c2e04b9f/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black mt-3">
                Nike Golf
              </h4>
              <h5 className="font-sans font-medium text-lg text-black mb-3">
                Conquer any course in style.
              </h5>
              <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
                Shop
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/0617b911-1da3-4402-ac00-3d4912e356d2/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black mt-3">
                Nike Football
              </h4>
              <h5 className="font-sans font-medium text-lg text-black mb-3">
                Command the field in game-ready gear.
              </h5>
              <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
                Shop
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/f0f57c40-39de-4b73-80f9-e0b138545091/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black mt-3">
                Nike Baseball
              </h4>
              <h5 className="font-sans font-medium text-lg text-black mb-3">
                Step up to the plate in style.
              </h5>
              <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
                Shop
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "495px", marginRight: "8px" }}>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/59507e47-4228-4d74-9893-2ac84a9a3dcd/nike-just-do-it.jpg"
                alt=""
              />
              <h4 className="font-sans font-medium text-xl text-black mt-3">
                Nike Soccer
              </h4>
              <h5 className="font-sans font-medium text-lg text-black mb-3">
                Bring mad style to the pitch with the latest gear.
              </h5>
              <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
                Shop
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Sport Section End  */}

      {/* Fall Styles section Start  */}
      <div className="Styles-item-slider mx-5 md:ml-12">
        <h4 className="md:ml-[45px] font-sans font-medium text-2xl mt-20">
          New Fall Styles
        </h4>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          className="mySwiper my-5 ml-12 my-swiper cursor-pointer">
          <SwiperSlide className="w-[495px] md:ml-12">
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/c2643901-9e8c-41b5-b17d-36802f3102e9/dunk-low-retro-mens-shoes-M0t9Sv.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Nike Dunk Low Retro
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Men's Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$115</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/c61d125f-e376-4341-bb46-9d7bfe4ccc63/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Air Jordan 1 Retro High OG
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Men's Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$180</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/feb1679d-8e8c-47ac-bd4d-862d9706823a/air-jordan-1-low-og-shoes-v0FbJt.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Air Jordan 1 Low OG
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$140</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/4e3cfa75-7362-4985-bb26-4c329ccd71ef/jordan-1-retro-high-og-little-kids-shoes-mbF24m.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Jordan 1 Retro High OG
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Little Kids' Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$85</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/8817e24a-7a97-4402-8a47-b257da74981e/jordan-1-retro-high-og-baby-toddler-shoes-Jzhbkc.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Jordan 1 Retro High OG
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Baby/Toddler Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$70</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/abb2f2bc-157a-441a-8239-7dba9ce42ebe/dunk-low-big-kids-shoes-W5rtTQ.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Nike Dunk Low
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Big Kids' Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$90</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_489,c_limit/5f088876-af31-4c60-b9a9-d10bf37fd185/dunk-low-big-kids-shoes-l6Jxh2.png"
              alt=""
            />
            <div className="flex justify-between mt-3">
              <div>
                <h4 className="font-sans font-medium text-lg text-black">
                  Nike Dunk Low
                </h4>
                <h5 className="font-sans font-medium text-lg text-gray-700">
                  Men's Shoes
                </h5>
              </div>
              <div className="mr-4">
                <p className="font-sans font-bold">$115</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Fall Styles Section End  */}

      {/* Membership section Start  */}
      <div className="Membership-item-slider mx-5 md:ml-12">
        <h4 className="md:ml-[45px] font-sans font-medium text-2xl mt-20">
          Nike Membership
        </h4>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          className="mySwiper my-5 ml-12 my-swiper cursor-pointer">
          <SwiperSlide className="w-[495px] md:ml-12 relative">
            <div>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/058f025c-2161-4804-91c8-5176ea565294/nike-just-do-it.jpg"
                alt=""
              />
            </div>
            <div className="absolute bottom-8 left-10">
              <h5 className="font-sans font-medium text-lg text-white mt-3">
                The Best of Nike
              </h5>
              <h3 className="font-sans font-medium text-2xl text-white mb-3">
                It's Better as a Member
              </h3>
              <button className="my-btn-white">Sign Up</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/4c87032a-1756-47dc-b731-966f2d79285e/nike-just-do-it.jpg"
              alt=""
            />
            <div className="absolute bottom-8 left-10">
              <h5 className="font-sans font-medium text-lg text-white mt-3">
                Member Product
              </h5>
              <h3 className="font-sans font-medium text-2xl text-white mb-3">
                Your Exclusive Access
              </h3>
              <button className="my-btn-white">Shop</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/c9176bd9-e727-46ad-8bcb-62312cbfd5d5/nike-just-do-it.jpg"
              alt=""
            />
            <div className="absolute bottom-8 left-10">
              <h5 className="font-sans font-medium text-lg text-white mt-3">
                Member Rewards
              </h5>
              <h3 className="font-sans font-medium text-2xl text-white mb-3">
                How We Say Thank You
              </h3>
              <button className="my-btn-white">Celebrate</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/73de197a-2e67-42aa-b4e6-aeda1883636b/nike-just-do-it.jpg"
              alt=""
            />
            <div className="absolute bottom-8 left-10">
              <h5 className="font-sans font-medium text-lg text-white mt-3">
                Sports & Wellness Apps
              </h5>
              <h3 className="font-sans font-medium text-2xl text-white mb-3">
                Movement Where You’re At
              </h3>
              <button className="my-btn-white">Move</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/a3d73dc6-a36a-432c-a845-68bf59c5f876/nike-just-do-it.jpg"
              alt=""
            />
            <div className="absolute bottom-8 left-10">
              <h5 className="font-sans font-medium text-lg text-white mt-3">
                Nike By You
              </h5>
              <h3 className="font-sans font-medium text-2xl text-white mb-3">
                Your Customization Service
              </h3>
              <button className="my-btn-white">Customize</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_489,c_limit/fb8234b8-0aa7-4d44-8f52-6f95578b1b8a/nike-just-do-it.jpg"
              alt=""
            />
            <h4 className="font-sans font-medium text-xl text-black mt-3">
              SNKRS
            </h4>
            <h5 className="font-sans font-medium text-lg text-black mb-3">
              Your Ultimate Sneaker Community
            </h5>
            <span className="border-b-[1px] border-black cursor-pointer font-sans font-medium text-black">
              Explore
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Membership Section End  */}
    </>
  );
};

export default Home;
