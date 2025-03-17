import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { getBlogPost } from "./Api";
import "../node_modules/swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination]);

export default function BlogSlider() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getBlogPost().then((res) => {
      if (res.data.success === true) {
        setBlogData(res.data.data);
      } else {
        setBlogData([]);
      }
    });
  }, []);

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      navigation={true}
      pagination={false}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {blogData.map((item, index) => (
        <SwiperSlide key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`/blog/${item.url}`}
          >
            <div className="card blog-card">
              <img
                className="img-fluid"
                alt="Blog"
                src={`https://console.authkey.io/blogimages/${item.image_name}`}
              />
              <p>{item.page_title}</p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}