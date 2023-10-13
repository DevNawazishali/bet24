import React from "react";
import "./Home_page_slider.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import baner from "../Assets/banner1.png";
import baner1 from "../Assets/banner2.png";
import baner2 from "../Assets/banner3.png";
import baner3 from "../Assets/banner4.jpg";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function Home_page_slider() {
  return (
    <div className="main_home_page_slider">
      <div className="container-fluid">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={baner} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={baner1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={baner2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={baner3} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
