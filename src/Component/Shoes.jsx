import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Shoes.css";

const Shoes = () => {
  return (
    <>
      <h4 className="font-sans font-medium text-2xl mt-6 md:mt-16 mb-6 ml-4">
        Always Iconic
      </h4>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mx-2 md:mx-0 mb-4 md:mb-20 cursor-pointer">
        <SwiperSlide className="ml-12 md:ml-[10px] flex justify-center items-center ">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/e1775c2b-c58a-47c9-ac9a-f01d891996cb/nike-just-do-it.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/9c74f997-f9c5-4b76-867c-1244286591e3/nike-just-do-it.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/21e1e591-f935-406e-abfb-d6ff522dfa45/nike-just-do-it.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/bda3d33b-9720-4881-b7f7-865fe75373f5/nike-just-do-it.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/091f2269-a23c-45ab-9d44-52add8cb471b/nike-just-do-it.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/a715c421-a5e8-414f-8f62-ab21b6fae49a/nike-just-do-it.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/386e7705-ccd4-49fb-b100-dc220932d0c3/nike-just-do-it.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="ml-4 md:ml-[10px] flex justify-center items-center">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/a4a546d9-cfbb-4de3-9f9a-4f169d58320a/nike-just-do-it.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Shoes;
