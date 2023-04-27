import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper'

const AnchorTag = () => {
  return (
    <div className="AnchorTag">
      <div className="wrapper">
        <div className="a-top">
          <a href="#">Art</a>
          <a href="#">All</a>
          <a href="#">Gaming</a>
          <a href="#">Member</a>
          <a href="#">PFPs</a>
          <a href="#">Photos</a>
        </div>
        <div className="swiper-wrapper">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sliderslider-video">
                <video
                  className="video"
                  autoPlay
                  loop
                  src="https://stream.mux.com/7mSs02GNRne74urar1P02AfI102sMlz0197pN9802K02puLk8/high.mp4"
                ></video>
                <div className="swiperSlider-wrap">
                  <div className="swipperslider-left">
                    <img
                      src="https://i.seadn.io/s/primary-drops/0xbe9371326f91345777b04394448c23e2bfeaa826/24545572:hero:partner_logo_url:58ca3a5a-096a-4cc8-91ba-249947bea21e.png?auto=format&w=3840"
                      alt=""
                    />
                    <h2 className="swiperSlider-wrap-head">Gemesis</h2>
                    <p className="swiperSlider-wrap-para">ByOpenseaPro</p>
                    <p className="swiperSlider-wrap-para">1,80,000items.0ETH</p>
                    <button className="swiperSlider-wrap-btn">
                      MettingNow
                    </button>
                  </div>
                  <div className="swippersilder-right">viewDrop</div>
                </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>Slide 2</SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default AnchorTag
