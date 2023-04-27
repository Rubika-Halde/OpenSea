import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

const Categories = () => {
  const [slides, setSlides] = useState(0)
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 800
        ? 2
        : window.innerWidth > 720
        ? 5
        : 0,
    )
  }
  React.useEffect(() => {
    setSlidesPerview()
    window.addEventListener('resize', setSlidesPerview)
    return () => {
      window.removeEventListener('resize', setSlidesPerview)
    }
  }, [])
  return (
    <div className="Nft">
      <div className="nft-head">Explore Categories</div>
      <div className="nft-swiper">
        <Swiper
          className="mySwiper"
          slidesPerView={slides}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/categories/maverick-art.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">Art</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/categories/maverick-gaming.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">Gaming</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/categories/maverick-membership.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">Memberships </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/categories/maverick-pfps.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">PFPs</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/categories/maverick-photography.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">Photography</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/learn-center//how-to-buy-nft.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">How to buy NFT</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/learn-center//what-is-minting.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">What is minting?</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/learn-center//stay-protected-web3.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">How to stay protected </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://opensea.io/static/images/learn-center//how-to-create-nft.png"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h4 className="heading">How to create an NFT</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Categories
